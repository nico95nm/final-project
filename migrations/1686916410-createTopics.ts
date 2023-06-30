import { Sql } from 'postgres';

export type Topic = {
  id: number;
  title: string;
  users_id: number;
};
export async function up(sql: Sql) {
  await sql`

CREATE TABLE topics (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title varchar (200),
users_id integer NOT NULL
REFERENCES users (id) ON DELETE CASCADE
)
`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE topics
  `;
}
