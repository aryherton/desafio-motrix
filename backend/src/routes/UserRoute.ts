import { Router } from 'express';

import LoginCtrll from '../controller/UserCtrll';
import ValidLogin from '../middlewares/ValidLoginMidd';

const ctrll = new LoginCtrll();
const router = Router();

export default router
  .get('/message', ctrll.getUser)
  .post('/login', ValidLogin.validLoginBody, ctrll.checkLogin)
  .post('/register', ValidLogin.validLoginRegister, ctrll.createUser);