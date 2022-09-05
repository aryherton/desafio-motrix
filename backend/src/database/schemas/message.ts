import { string } from 'joi';
import { Schema } from 'mongoose';

import IMessage from '../interface/IMessage';

export default new Schema<IMessage>(
{
  idUser: String,
  title: String,
  description: String,
  status: String,
  priority: String,
  historyUpdate: [
    {
      title: String,
      description: String,
      status: String,
      priority: Number,
      updatedAt: Date,
    },
  ]
}, { timestamps: true });
