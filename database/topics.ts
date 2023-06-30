import { cache } from 'react';
import { Topic } from '../migrations/1686916410-createTopics';
import { sql } from './connect';

export const Topics = cache(async () => {
  const topics = await sql<Topic[]>`
    SELECT * FROM topic
 `;

  return topics;
});
export const createTopic = cache(async (topic: string, topicInput: string) => {
  const [Topics] = await sql<Topic[]>`
    INSERT INTO topics
      (title, user_id)
    VALUES
      (${title}, ${user_id})
    RETURNING
      title,
      user_id
 `;
  return topic;
});

export const getTopicsWithLimitAndOffset = cache(
  async (limit: number, offset: number) => {
    const topics = await sql<Topic[]>`
      SELECT
        *
      FROM
        topics
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return topics;
  },
);

export const getTopicsWithLimitAndOffsetBySessionToken = cache(
  async (limit: number, offset: number, token: string) => {
    const topics = await sql<Topic[]>`
      SELECT
        topics.*
      FROM
        topics
      INNER JOIN
        sessions ON (
          sessions.token = ${token} AND
          sessions.expiry_timestamp > now()
          -- sessions.user_id = animals.user_id
        )
      -- This would JOIN the users table that is related to animals
      -- INNER JOIN
      --   users ON (
      --     users.id = animals.user_id AND
      --     sessions.user_id = users.id
      --   )
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return topics;
  },
);

export const getTopicsById = cache(async (id: number) => {
  const [Topics] = await sql<Topic[]>`
    SELECT
      *
    FROM
      topics
    WHERE
      id = ${id}
  `;
  return Topics;
});

export const updateTopicById = cache(
  async (id: number, tittle: string, user_id: number) => {
    const [topics] = await sql<Topic[]>`
      UPDATE topics
      SET
        tittle = ${tittle},
        user_id = ${user_id}}
      WHERE
        id = ${id}
        RETURNING *
    `;

    return topics;
  },
);
export const postTopicById = cache(async (tittle: string, user_id: number) => {
  const [user] = await sql<Topic[]>`
    INSERT INTO users
      (tittle, user_id)
    VALUES
      (${tittle}, ${user_id})
    RETURNING
      id,
      tittle,
      user_id
 `;

  return user;
});

export const deleteTopicById = cache(async (id: number) => {
  const [topic] = await sql<Topic[]>`
    DELETE FROM
      topics
    WHERE
      id = ${id}
    RETURNING *
  `;
  return topic;
});
// also ask for this
export const getTopics = cache(async (id: number) => {
  const newTopic = await sql<Topic[]>`
   SELECT
     topics.id AS topicss_id,
     topics.title AS topics_title,
     topics.user_id AS topics_user_id
    FROM
     topics
    INNER JOIN
      animal_foods ON animals.id = animal_foods.animal_id
    INNER JOIN
      foods ON foods.id = animal_foods.food_id
    WHERE comments.id = ${id}
  `;
  return newTopic;
});

// Join query for getting a single animal with related foods using json_agg
/* export const getTopicById = cache(async (id: number) => {
  const [topic] = await sql<AnimalWithFoodsInJsonAgg[]>`
SELECT
  comments.id AS comment_id,
  comments.topic AS topic,
  comment.comment AS comment_comment,
  (
    SELECT
      json_agg(foods.*)
    FROM
      animal_foods
    INNER JOIN
      foods ON animal_foods.food_id = foods.id
    WHERE
      animal_foods.animal_id = animals.id

  ) AS animal_foods
FROM
  animals
WHERE
  animals.id = ${id}
GROUP BY
  animals.first_name, animals.type, animals.accessory, animals.id;
  `;

  return comment;
});
 */
