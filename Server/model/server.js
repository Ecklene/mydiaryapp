import express from 'express';
import pg from 'pg';
const app = express();
const connectionString = process.env.DATABASE_URL || "postgres://postgres:root@localhost:5432/mydiaryapp";

const client  = new.pg.Client(connectionString);
client.connect();
const query = client.query(
  `CREATE TABLE signup(id SERIAL PRIMARY KEY, name VARCHAR(50) not null, username VARCHAR(15) not null,  email VARCHAR(30) not null, password VARCHAR(15) not null)`
query.on('end', () => {client.end();});


const client  = new.pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE adduser(id SERIAL PRIMARY KEY, title VARCHAR(1000) not null)');
query.on('end', () => {client.end();});