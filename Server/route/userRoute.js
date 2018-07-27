import express from 'express';
import bodyParser from 'body-parser';
import entry from '../controller/usercontroller.js';
const router = express.Router();
// import server from '../server.js';


router.post("/auth/signup", entry.signup);

router.post("/auth/login", entry.login);


export default router;
