import IMessage from './IMessage';

export default interface User {
  name?: string,
  email: string,
  password: string,
  manager?: boolean,
  arrMessage?: IMessage[],
  historyUpdateMessage?: IMessage[],
}
