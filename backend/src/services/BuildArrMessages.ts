import UsersModel from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';
import IMessage from '../database/interface/IMessage';

export default class BuildArrMessagens {
  constructor(private userModel = new UsersModel()) {}

  async insertMessageArr(email: string, message: IMessage) {
    const [ { arrMessage } ] = await this.userModel.getByEmail(email);

    arrMessage?.push(message);

    return arrMessage;
  };

  async updateMessageArr(email: string, message: IMessage): Promise<IMessage[]> {
    let newMessage = message;
    const [{ arrMessage }] = await this.userModel
      .getByEmail(email);
    const newArrMessage = arrMessage?.map((mess) => {
      if (mess._id?.toString() === newMessage._id) {
        const previousMessage = mess;
        delete previousMessage._id;
        mess.historyUpdate.push(previousMessage);
        newMessage.historyUpdate = mess.historyUpdate;
        return newMessage;
      }

      return mess;
    }) as IMessage [];
    
    return newArrMessage;
  };
}