import { cache } from 'react';
import { Comment } from '../migrations/1686916408-createTableComments';
import { sql } from './connect';

export const Comments = cache(async () => {
  const comments = await sql<Comment[]>`
    SELECT * FROM comment
 `;

  return comments;
});
export const createComment = cache(
  async (topic: string, commentInput: string) => {
    const [comment] = await sql<Comment[]>`
    INSERT INTO comments
      (topic, comment)
    VALUES
      (${topic}, ${commentInput})
    RETURNING
      id,
      comment
 `;

    return comment;
  },
);

export const getCommentsWithLimitAndOffset = cache(
  async (limit: number, offset: number) => {
    const comments = await sql<Comment[]>`
      SELECT
        *
      FROM
        comments
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return comments;
  },
);

export const getCommentsWithLimitAndOffsetBySessionToken = cache(
  async (limit: number, offset: number, token: string) => {
    const comments = await sql<Comment[]>`
      SELECT
        comments.*
      FROM
        comments
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

    return comments;
  },
);

export const getCommentsById = cache(async (id: number) => {
  const [comment] = await sql<Comment[]>`
    SELECT
      *
    FROM
      comments
    WHERE
      id = ${id}
  `;
  return comment;
});

export const updateCommentById = cache(
  async (id: number, topic: string, comment: string) => {
    const [comments] = await sql<Comment[]>`
      UPDATE comments
      SET
        topic = ${topic},
        comment = ${comment}}
      WHERE
        id = ${id}
        RETURNING *
    `;

    return comments;
  },
);
export const postCommentById = cache(async (topic: string, comment: string) => {
  const [user] = await sql<Comment[]>`
    INSERT INTO users
      (topic, comment)
    VALUES
      (${topic}, ${comment})
    RETURNING
      id,
      topic,
      comment
 `;

  return user;
});

export const deleteCommentById = cache(async (id: number) => {
  const [comment] = await sql<Comment[]>`
    DELETE FROM
      comments
    WHERE
      id = ${id}
    RETURNING *
  `;
  return comment;
});
// also ask for this
export const getComments = cache(async (id: number) => {
  const newComment = await sql<newComment[]>`
   SELECT
     comments.id AS comments_id,
     comments.topic AS comments_topic,
     comments.comment AS animals_type
    FROM
     comments
    INNER JOIN
      animal_foods ON animals.id = animal_foods.animal_id
    INNER JOIN
      foods ON foods.id = animal_foods.food_id
    WHERE comments.id = ${id}
  `;
  return newComment;
});

// Join query for getting a single animal with related foods using json_agg
export const getCommentById = cache(async (id: number) => {
  const [comment] = await sql<AnimalWithFoodsInJsonAgg[]>`
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
