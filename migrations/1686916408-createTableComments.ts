import { Sql } from 'postgres';

export type Comment = {
  username: ReactNode;
  usersId: ReactNode;
  id: number;
  topic: string;
  comment: string;
};
export async function up(sql: Sql) {
  await sql`
 CREATE TABLE comments (
/*  Create animalis table */
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
users_id integer NOT NULL,
topic varchar(100) NULL,
comment varchar(100) NULL
)

`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE comments
  `;
}
