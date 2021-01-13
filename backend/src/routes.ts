import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';

import UserController  from './controllers/UserController';
import authMiddleware from './middleware/authMiddleware';


const router = Router();
const upload = multer(uploadConfig);

router.post('/cadastro' , UserController.create);
router.post('/auth' , UserController.login);
router.post('/auth/refresh' , authMiddleware , UserController.checkToken);
router.get('/profile/:id' , UserController.index)
router.post('/barber',upload.array('images'), UserController.createBarber );
router.get('/show' , UserController.show)


export default router;
