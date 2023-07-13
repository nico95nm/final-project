import { cache } from 'react';
import { Comment } from '../migrations/1686916408-createTableComments';
import { sql } from './connect';

export const createComment = cache(
  async (userId: number, topic: number, comment: string) => {
    const [comments] = await sql<Comment[]>`
    INSERT INTO comments
      (users_id, topic, comment)
    VALUES
      (${userId}, ${topic}, ${comment})
    RETURNING
      id,
      users_id,
      topic,
      comment
 `;

    return comments;
  },
);

export const getCommentsByPostId = cache(async () => {
  const comments = await sql<Comment[]>`
  SELECT
    *
  FROM
    comments
  WHERE
    user_id = 'comment_id'
  `;
  return comments;
});

export const getAllComments = cache(async () => {
  const comments = await sql<Comment[]>`
    SELECT
      *
    FROM
      comments
  `;
  return comments;
});
export const getAllCommentsByTopics = cache(async (topic: number) => {
  const comments = await sql<Comment[]>`
    SELECT
      *
    FROM
      comments
      WHERE
      topic = ${topic}
  `;
  return comments;
});
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
export const getAllCommentsWithUserInfo = cache(async () => {
  const comments = await sql<Comment[]>`
    SELECT
    comments.id AS id,
    comments.users_id AS users_id,
    comments.topic AS topic,
    comments.comment AS comment,
    users.id AS user_id,
    users.username AS username
    FROM
      comments, users
      WHERE
      comments.users_id = users.id
  `;
  return comments;
});
