import { ITasks } from './ITasks';

export interface IUser{
  name?: string,
  email: string,
  password: string,
  arrMessage?: ITasks[],
}
