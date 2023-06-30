/* import { Sql } from 'postgres';

export type Topic = {
  id: number;
  topic_id: number;
  comment_id: number;
};
export async function up(sql: Sql) {
  await sql`

CREATE TABLE topic_comments (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
topic_id integer NOT NULL
REFERENCES topic_comments (id) ON DELETE CASCADE,
comment_id integer NOT NULL
REFERENCES topic_comments (id) ON DELETE CASCADE
)
`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE topic_comments
  `;
}
 */
