import express from 'express';
import bodyParser from 'body-parser';
import Joi from 'joi';
import EntryRoute from './route/EntryRoute';
import UserRoute from './route/UserRoute';
import db from './model/database';
import dotenv from 'dotenv';
dotenv.config();

export default app;



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api/v1', EntryRoute);
app.use('/api/v1', UserRoute);


app.get('/', (req, res) => {
  res.send('Hello myDairy App');
});


// ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on PORT ${port}..`);
});


