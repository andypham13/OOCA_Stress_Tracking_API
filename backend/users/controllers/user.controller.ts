import { Request, Response } from 'express';
import { User } from '../models/User';

async function createUser(req: Request, res: Response) {
    console.log('createUser');
    res.send({
        message: 'createUser'
    });
}

async function uploadStressLevels(req: Request, res: Response) {
    console.log('uploadStressLevels');
    res.send({
        message: 'uploadStressLevels'
    });
}

export const userController = {
    createUser,
    uploadStressLevels
};
