import { Sql } from 'postgres';

export type Category = {
  id: number;
  name: string;
  label: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE categories (
      id        integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name      varchar(30) NOT NULL,
      label     varchar(30) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE categories
  `;
}
