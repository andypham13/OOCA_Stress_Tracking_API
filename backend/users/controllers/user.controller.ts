import { Request, Response } from 'express';
import { CreateUserInterface } from '../interfaces/user.interface';
import { StressLevelInterface } from '../interfaces/stressLevel.interface';
import { userService } from '../services/user.service';
import { UserDocument } from '../models/User';

async function createUser(req: Request, res: Response) {
    try{
        console.log('createUser from IP: ' + req.ip);
        const user = req.body as CreateUserInterface;
        const createdUser = await userService.createUser(user);
        res.send({
            status: 'SUCCESS',
            data: createdUser
        }).end();
    } catch (e: any) {
        res.send({
            status: 'FAILED',
            message: e.message
        }).end();
    }
}

async function uploadStressLevels(req: Request, res: Response) {
    try{
        const userName = req.params.userName;
        const stressLevelSubmission = req.body as StressLevelInterface;
        const success = await userService.submitStressLevels(stressLevelSubmission, userName);
        res.send({
            status: success ? 'SUCCESS' : 'FAILED',
        });
    } catch (err: any) {
        res.send({
            status: 'FAILED',
            message: err.message
        }).end();
    }
}

async function getStressLevels(req: Request, res: Response) {
    try {
        const userName = req.params.userName;
        const user = await userService.getStressLevels(userName) as UserDocument;
        res.send({
            status: 'SUCCESS',
            data: user
        });
    } catch (e: any) {
        res.send({
            status: 'FAILED',
            message: e.message
        }).end();
    }
}

export const userController = {
    createUser,
    getStressLevels,
    uploadStressLevels
};
