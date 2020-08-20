import { Router } from 'express';
import UserController from '../api/controllers/UserController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/', userController.create);

export default usersRouter;
