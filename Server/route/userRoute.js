import { Router } from 'express';
import UserController from '../controller/UserController';
import db from '../model/database';

const router = Router();


router.post('/auth/signup', UserController.signup);
router.post('/auth/login', UserController.login);

export default router;

