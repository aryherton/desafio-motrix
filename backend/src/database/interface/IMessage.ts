interface HistoryUpdateMessage {
  title: string;
  description: string,
  status: string,
  priority: string,
  updatedAt: Date,
};

export default interface MessageToDoList {
    _id: string;
    idUser: string;
    title: string;
    description: string,
    status: string,
    priority: string,
  historyUpdate: HistoryUpdateMessage[],
  createdAt: Date,
  updatedAt: Date,
};