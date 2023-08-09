import { Router } from 'express';
import { getUsers, getUserById, saveUser } from '../controllers/users.controller.js';
const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:uid', getUserById);
userRouter.post('/', saveUser);

export default userRouter;