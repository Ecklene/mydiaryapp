import db from './database.js';

const entries = `CREATE TABLE IF NOT EXIST entries (userId integer  REFERENCES users(id), 
title VARCHAR(1000) not null, 
created TIMESTAMPTZ,
modify TIMESTAMPTZ)`;

export default entries;
