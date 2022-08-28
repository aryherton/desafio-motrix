import { string } from 'joi';
import { Schema } from 'mongoose';

import IUser from '../interface/IUser';

export default new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    manager: { type: Boolean, default: false },
    arrMessage: [
      {
        title: String,
        description: String,
        status: String,
        priority: Number,
        timestamp: {
          created: { type: Date, default: Date.now },
          // updated: { type: Date, default: Date.now },
        },
      }
    ],
    historyUpdateMessage: [
      {
        title: String,
        description: String,
        status: String,
        priority: Number,
        timestamp: {
          // created: { type: Date, default: Date.now },
          updated: { type: Date, default: Date.now },
        },
      },
    ]
  });