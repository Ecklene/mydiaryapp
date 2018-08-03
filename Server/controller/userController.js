import express from 'express';
import bodyParser from 'body-parser';
// import router from 'router';
import pg from 'pg';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import config from '../../config';
import db from '../model/database';
import users from '../model/users';
import entries from '../model/entries';

function validateUser(user) {
  	const schema = {
        name: Joi.string().min(5).required(),
        username: Joi.string().min(5).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(5).alphanum().required(),
  }
  return Joi.validate(user, schema)
}

const signup = (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  const user = {
    name:  req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  };

  const text = 'INSERT INTO users(name, username, email, password) VALUES($1, $2, $3, $4) RETURNING id';
  const values = [user.name, user.username, user.email, user.password];

  db.query(text, values, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      const token = jwt.sign({ userId: result.rows[0].id }, config.SECRET, {
        expiresIn: 86400,
      });
      res.status(201).json({
        auth: true,
        token: token,
        status: 'success',
        message: 'Inserted a new user',
      });
    }
  });
};

const login = (req, res) => {
   const text = 'SELECT * from users WHERE username = $1, req.body.username'
    db.query(text, (err, user) => {
      console.log(user);
      if (err) {
        return res.status(500).send(err);
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      console.log(passwordIsValid);

      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }

      const token = jwt.sign({ id: user.id }, config.SECRET, {
        expiresIn: 86400 // expires in 24 hours
      });
      return res.status(200).send({ auth: true, token: token });
    });
  }

  export default {
    signup,
    login
  }
