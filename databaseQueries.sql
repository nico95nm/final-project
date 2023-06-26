-- Create animalis table
CREATE TABLE comments (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
topic varchar(100) NULL,
comment varchar(100) NULL
);
