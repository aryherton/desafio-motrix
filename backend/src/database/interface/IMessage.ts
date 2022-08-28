interface HistoryUpdateMessage {
  title: string;
  description: string,
  status: string,
  priority: string,
};

export default interface MessageToDoList {
    _id?: string;
    title: string;
    description: string,
    status: string,
    priority: string,
    historyUpdate: HistoryUpdateMessage[],
};