import mongoose from 'mongoose';

import UsersSchemas from '../schemas/users';
import IUser from '../interface/IUser';
import IMessage from '../interface/IMessage';

export default class UsersModel {
  constructor(
    private model = mongoose.model('users', UsersSchemas)
  ) {};

  async create(user: IUser): Promise<IUser & { _id: mongoose.Types.ObjectId }>{
    return this.model.create(user);
  };

  async getAll(): Promise<IUser[]> {
    return this.model.find({}, { password: 0, updatedAt: 0, __v: 0 });
  };

  async getByEmail(email: string): Promise<IUser[]> {
    return this.model.find({ email }, { password: 0, updatedAt: 0, __v: 0 });
  };

  async getPassword(email: string): Promise<string | void> {
    const user = await this.model.findOne({ email }, { password: 1 });
    const pswd = user?.password;
    if (pswd) {
      return pswd;
    }
  };

  async updateMessage(email: string, arrMessage: IMessage[]): Promise<void> {
    await this.model.updateOne({ email }, { arrMessage });
  };

  async updateUser(email: string, user: IUser): Promise<void> {
    await this.model.updateOne({ email }, { ...user });
  };

  async deleteUser(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  };
}