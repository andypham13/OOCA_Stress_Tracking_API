import express, { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { Validate } from '../middleware/validateRequestBody.middleware';
import { uploadStressLevels } from '../joi-schema/createUser.joi';

export const userRouter: Router  = express.Router();

userRouter.post('/stress-levels', Validate(uploadStressLevels), userController.uploadStressLevels);

userRouter.post('/user', userController.createUser);
