import { Router } from 'express';

import LoginCtrll from '../controller/UserCtrll';
import ValidLogin from '../middlewares/ValidLoginMidd';

const ctrll = new LoginCtrll();
const router = Router();

export default router
  .get('/', ValidLogin.validLoginBody, ctrll.checkLogin)
  .get('/message', ctrll.getUser)
  .post('/', ValidLogin.validLoginRegister, ctrll.createUser);