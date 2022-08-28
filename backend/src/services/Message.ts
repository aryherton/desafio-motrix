import UsersModel from '../database/model/UsersModel';
import IMessage from '../database/interface/IMessage';
import IUser from '../database/interface/IUser';

export default class Message {
  constructor(private userModel = new UsersModel()){}

 async setMessage(email: string, arrMessage: IMessage[]): Promise<void> {
  await this.userModel.updateMessage(email, arrMessage);
  };

 async getMessage(email: string): Promise<IUser> {
  const [ user ] = await this.userModel.getByEmail(email);
  
  return user;
  };
  
  async updateMessage(email: string, arrMessage: IMessage[]) {
    await this.userModel.updateMessage(email, arrMessage);
  };

  async deleteMessage(email: string, arrMessDel: string[]): Promise<void> {
    const user = await this.getMessage(email);    
    const newArrMessage = user
      .arrMessage?.filter((mess) => arrMessDel
        .every((messDel) => mess._id?.toString() !== messDel));
    
    await this.userModel.updateMessage(email, newArrMessage || []);
  };
}