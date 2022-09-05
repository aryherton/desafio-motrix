import { Request, Response, NextFunction } from 'express';

import UserService from '../services/User';
import MessageService from '../services/Message';
import StatusHttp from '../enum/statusHttp';
import MessagesRes from '../enum/messageRes';
import Erros from '../error/ClassErrors';
import { JwtPayload } from 'jsonwebtoken';
import Token from '../help/Token';
import IUser from '../database/interface/IUser';

export default class UserCtrll {
  constructor(
    private userServ = new UserService(),
    private messageServ = new MessageService(),
  ) {}

  createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body;
      const checkUser = await this.userServ.getUserByEmail(email);

      if (checkUser) {
        return res.status(StatusHttp.CONFLICT).json({ message: MessagesRes.ALREADY_REGISTERED });
      }
      const token = await this.userServ.insertUser({ name, email, password });

      return res.status(StatusHttp.CREATED).json({ message: MessagesRes.LOGIN_SUCCESS, token });
    } catch (e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER });
    }
  };

  checkLogin = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { email, password } = req.body;
      const token = await this.userServ.validUser(email, password);

      if (token) {
        return res.status(StatusHttp.OK).json({ message: MessagesRes.LOGIN_SUCCESS, token });
      }
      throw Erros.notFound(MessagesRes.INCORRECT);
    } catch (e: any) {
      console.log(e);
      // next(e);
      return res.status(StatusHttp.NOT_FOUND).json({ message: e.message });
    }
  };
  
  getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { authorization } = req.headers;
      
      if (authorization) {
        const user = Token.validToken(authorization) as JwtPayload;
        const userData: IUser = await this.userServ.getUserByEmail(user.email);
        const arrMessage = await this.messageServ.getAllMessage(user._id);

        return res.status(StatusHttp.OK).json({
          name: userData.name,
          email: userData.email,
          arrMessage
        });
      }

      return res.status(StatusHttp.NO_CONTENT).json({ message: MessagesRes.NOT_TOKEN });
    } catch (e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER });
    }
  };
}
