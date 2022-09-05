import { Request, Response } from 'express';

import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';
import IMessage from '../database/interface/IMessage';
import Token from '../help/Token';
import MessageServ from '../services/Message';
import { JwtPayload } from 'jsonwebtoken';

export default class MessageCtrll {
  // constructor(private messageServ = new MessageServ()) {}

  async setMessageCtrll(req: Request, res: Response) {
    try {
        const { authorization } = req.headers;
        let message: IMessage = req.body;
        
        if (authorization) {
          const user = Token.validToken(authorization) as JwtPayload;
          const messageServ = new MessageServ();
          message.idUser = user._id;

          await messageServ.setMessage(message);

          return res.status(StatusHttp.OK).json({ message: Messages.SUCCESS_RECORD });
        }

        return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  };
  
  async getHistorySortCtrll(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const { id } = req.params;
      const { data: { typeSort } } = req.body;
      

      if (authorization) {
        Token.validToken(authorization) as JwtPayload;
        const messageServ = new MessageServ();
        const message = await messageServ.getHistorySortByUpdateAt(id, typeSort);

        return res.status(StatusHttp.OK).json({ message });
      }

      return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  };

  async updateMessageCtrll(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const message: IMessage = req.body;

      if (authorization) {
        Token.validToken(authorization) as JwtPayload;
        const messageServ = new MessageServ();

        await messageServ.updateMessage(message._id, message);

        return res.status(StatusHttp.OK).json({ message: Messages.UPDATE_SUCCESS });
      }

      return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  };

  async deleteMessageCtrll(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const arrMessDel: string[] = req.body;

      if (authorization) {
        const user = Token.validToken(authorization) as JwtPayload;
        const messageServ = new MessageServ();
        await messageServ
          .deleteMessage(arrMessDel);

        return res.status(StatusHttp.OK).json({ message: Messages.DELETE_SUCCESS });
      }

      return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  };
}