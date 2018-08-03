import db from "./database.js";

const users = `CREATE TABLE [IF NOT EXISTS] users(id SERIAL PRIMARY KEY, 
name VARCHAR(50) not null, 
username VARCHAR(15) not null, 
email VARCHAR(30) not null, 
password VARCHAR(255) not null)`

export default users;