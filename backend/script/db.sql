CREATE extension if not EXISTS "uuid-ossp";

create table usuarios (
  id uuid PRIMARY KEY,
  nome varchar(255) not NULL,
  email varchar(255) not NULL,
  senha varchar(255) not NULL
);