import { cache } from 'react';
import { Comment } from '../migrations/1686916408-createTableComments';
import { sql } from './connect';

export const getComments = cache(async () => {
  const comments = await sql<Comments[]>`
    SELECT * FROM comments
 `;

  return comments;
});

export const getAnimalsWithLimitAndOffset = cache(
  async (limit: number, offset: number) => {
    const animals = await sql<Animal[]>`
      SELECT
        *
      FROM
        animals
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return animals;
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

export const getCommentById = cache(async (id: number) => {
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

export const createComment = cache(async (topic: string, comment: string) => {
  const [comments] = await sql<Comment[]>`
      INSERT INTO animals
        (first_name, type, accessory)
      VALUES
        (${topic}, ${comment})
      RETURNING *
    `;

  return comments;
});

export const updateCommentById = cache(
  async (id: number, topic: string, comment: string) => {
    const [comment] = await sql<Comment[]>`
      UPDATE comments
      SET
        topic = ${topic},
        comment = ${comment}
      WHERE
        id = ${id}
        RETURNING *
    `;

    return comment;
  },
);

export const deleteCommentById = cache(async (id: number) => {
  const [comment] = await sql<Comment[]>`
    DELETE FROM
      comments
    WHERE
      id = ${id}
    RETURNING *
  `;
  return Comment;
});

export const editComments = cache(async (id: number) => {
  const editComment = await sql<EditComment[]>`
   SELECT
     comment.id AS comment_id,
     comment.first_name AS comment_topic,
     comment.type AS comment_comment,
    FROM
     comments
    INNER JOIN
      editComment ON comment.id = editComment.comment_id
    WHERE comment.id = ${id}
  `;
  return editComment;
});
