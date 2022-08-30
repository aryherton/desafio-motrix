import { Router } from 'express';

import User from './UserRoute';
import Message from './MessageRoute';

const routes = Router();

export default routes
  .use('/user', User)
  .use('/message', Message);

