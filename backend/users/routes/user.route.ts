import express, { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { Validate } from '../middleware/validateRequestBody.middleware';
import { uploadStressLevels } from '../joi-schema/stressLevelsSubmission.joi';
import { createUser } from '../joi-schema/createUser.joi';
import { AttachmentProcessing } from '../middleware/attachmentProcessing.middleware';

export const userRouter: Router  = express.Router();

userRouter.post('/user', Validate(createUser), userController.createUser);
userRouter.post('/stress-levels/:userName', Validate(uploadStressLevels), AttachmentProcessing, userController.uploadStressLevels);
userRouter.get('/stress-levels/:userName', userController.getStressLevels);
