import { Router } from 'express';

import MessageCtrll from '../controller/MessageCtrll';

const ctrll = new MessageCtrll();
const router = Router();

export default router
  .post('/', ctrll.setMessageCtrll)
  .post('/:id', ctrll.getHistorySortCtrll)
  .put('/', ctrll.updateMessageCtrll)
  .delete('/', ctrll.deleteMessageCtrll);
