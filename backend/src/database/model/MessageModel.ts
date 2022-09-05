import mongoose from 'mongoose';

import MessageSchemas from '../schemas/message';
import IMessage from '../interface/IMessage';

export default class MessageModel {
  constructor(
    private model = mongoose.model('messages', MessageSchemas)
  ) { };
  
  async create(message: IMessage): Promise<IMessage & { _id: mongoose.Types.ObjectId }> {
    return this.model.create(message);
  };

  async getAll(idUser: string): Promise<IMessage[]> {
    const message = await this.model.find({ idUser });

    return message;
  };

  async getById(id: string): Promise<IMessage | void> {
    const _id = new mongoose.Types.ObjectId(id);
    const message = await this.model.findOne({ _id });

    if (message) {
      return message;
    }
  };
  
  async getHistorySort(id: string, sortType: string): Promise<IMessage[] | void> {
    const _id = new mongoose.Types.ObjectId(id);
    const typeSort = sortType === 'asc' ? 1 : -1;
    const message = await this.model.aggregate([
      { $match: { _id } },
      { $unwind: '$historyUpdate' },
      { $sort: { 'historyUpdate.updatedAt': typeSort } },
      { $group: { _id: '$_id', historyUpdate: { $push: '$historyUpdate' } } },
    ]);

    if (message) {
      return message;
    }
  };

  async updateMessage(id: string, message: IMessage): Promise<void> {
    const _id = new mongoose.Types.ObjectId(id);
    await this.model.updateOne({ _id }, message);
  };

  async deleteMessage(id: string): Promise<void> {
    const _id = new mongoose.Types.ObjectId(id);
    await this.model.deleteOne({ _id });
  };
}