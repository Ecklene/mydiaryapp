import express from 'express';
import bodyParser from 'body-parser';
import entryRoute from './Server/route/entryRoute.js';
import userRoute from './Server/route/userRoute.js';
import pg from 'pg';
import auth from 'auth';

// const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use("/api/v1", entryRoute);
app.use("auth", auth);
app.get('/', (req, res) => {
res.send('Hello myDairy App');
});

// ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on PORT ${port}..`);
});
export default app();