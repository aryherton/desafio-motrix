export interface ITasks {
  _id?: string;
  title: String,
  description: String,
  status: String,
  priority: String,
  historyUpdate?: [
    {
      title: String,
      description: String,
      status: String,
      priority: String,
      updatedAt: Date,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
  __v: Number,
}
