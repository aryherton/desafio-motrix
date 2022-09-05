import MessageModel from '../database/model/MessageModel';
import IMessage from '../database/interface/IMessage';
import IUser from '../database/interface/IUser';
import mongoose from 'mongoose';

export default class Message {
  constructor(private messageModel = new MessageModel()){}

 async setMessage(message: IMessage): Promise<IMessage> {
    const mess = await this.messageModel.create(message);

   return mess;
  };

  async getAllMessage(idUser: string): Promise<IMessage[]> {
    const message = await this.messageModel.getAll(idUser);

    return message;
  }

  async getMessage(id: string): Promise<IMessage | void> {
    const message = await this.messageModel.getById(id);
  
    return message;
  };
  
  async getHistorySortByUpdateAt(id: string, typeSort: string): Promise<IMessage[] | void> {
    const message = await this.messageModel.getHistorySort(id, typeSort);

    return message;
  };

  async updateMessage(id: string, newMessage: IMessage): Promise<void> {
    const message = await this.getMessage(id);

    await this.messageModel.updateMessage(id, newMessage);

    let tmpMess = await this.getMessage(id);
    if (tmpMess && message) {
      tmpMess.historyUpdate.push({
        title: message.title,
        description: message.description,
        status: message.status,
        priority: message.priority,
        updatedAt: new Date(),
      });

      await this.messageModel.updateMessage(id, tmpMess);
    }
  };

  async deleteMessage(arrMessDel: string[]): Promise<void> {  
    await Promise.all(arrMessDel.map(async (id: string) => {
      await this.messageModel.deleteMessage(id);
    }));
  };
}