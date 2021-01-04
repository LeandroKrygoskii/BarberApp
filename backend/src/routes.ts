import { Router } from 'express';

import UserController  from './controllers/UserController';
import authMiddleware from './middleware/authMiddleware';


const router = Router();

router.post('/cadastro' , UserController.create);
router.post('/auth' , UserController.login);
router.post('/auth/refresh' , authMiddleware , UserController.checkToken);



export default router;
