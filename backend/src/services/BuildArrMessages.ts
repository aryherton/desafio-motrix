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

  async updateMessageArr(email: string, message: IMessage): Promise<IMessage []> {
    const [ { arrMessage } ] = await this.userModel.getByEmail(email);
    const newArrMessage = arrMessage?.map((mess) => {
      if (mess._id?.toString() === message._id) {
        return message;
      }

      return mess;
    }) as IMessage [];
    
    return newArrMessage;
  };
}