export interface ITasks {
  _id?: string;
  title: String,
  description: String,
  status: String,
  priority: Number,
  historyUpdate?: [
    {
      title: String,
      description: String,
      status: String,
      priority: Number,
      updatedAt: Date,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
  __v: Number,
}
