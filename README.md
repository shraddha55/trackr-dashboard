# trackr-dashboard

## How to run trackr dashboard

First, git clone the repository

## Download Postgres

Add credentials to db.js 

const pool = new Pool({
	user: "postgres",
	password: "XXX",
	host: "localhost",
	port: 5432,
	database: "authtodolist"

});

## Download node.js



## Add node.js

### Open postgres 

psql -U postgres 
Commands: 
\l = see all databases 
\c <database> = connect to the database 
 \d = see all tables in the database
 \d <table_name> = see all columns in table
 select * from <table_name>; 
 
 Run these commands: 
 
 
 CREATE DATABASE authtodolist;


CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);


CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE  "uuid-ossp";

## Running the server
 cd server \
 npm i \
 npm start 

## Running the frontend
 cd client \
 npm i \
 npm start 
