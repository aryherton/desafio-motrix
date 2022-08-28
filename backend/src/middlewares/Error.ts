import { NextFunction, Request, Response } from 'express';

import Message from '../enum/messageRes';
import StatusHttp from '../enum/statusHttp';

interface Errors extends Error {
  message: string;
  statusCode: number;
}


const middlewareError = (
  err: Errors,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err.statusCode) {    
    return res
      .status(err.statusCode)
      .json({message: err.message});
  }
  
  console.log(err);
  res
    .status(StatusHttp.SERVER_ERROR)
    .json({ message: Message.ERROR_SERVER });
};

export default middlewareError;