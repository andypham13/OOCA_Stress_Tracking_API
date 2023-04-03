import { User, UserDocument } from '../models/User';
import { CreateUserInterface } from '../interfaces/user.interface';
import { StressLevelInterface } from '../interfaces/stressLevel.interface';

async function createUser(user: CreateUserInterface) : Promise<UserDocument> {
    const newUser = new User(user) as UserDocument;
    await newUser.save();
    return newUser;
}

async function submitStressLevels(stressLevelSubmission: StressLevelInterface, userName: string) : Promise<boolean> {
  const submitStressLevels = await User.findOneAndUpdate(
      { name: userName },
      { $push: { stressLevelsSubmissions: stressLevelSubmission } },
      { new: false}
  );
  if (submitStressLevels) {
      return true;
  }
  return false;
}

async function getStressLevels(userName: string) : Promise<UserDocument> {
    const user = await User.findOne({name: userName}) as UserDocument;
    return user;
}

export const userService = {
    createUser,
    submitStressLevels,
    getStressLevels
};