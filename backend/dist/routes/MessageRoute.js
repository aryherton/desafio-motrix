"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MessageCtrll_1 = __importDefault(require("../controller/MessageCtrll"));
const ctrll = new MessageCtrll_1.default();
const router = (0, express_1.Router)();
exports.default = router
    .post('/', ctrll.setMessageCtrll)
    .put('/', ctrll.updateMessageCtrll)
    .delete('/', ctrll.deleteMessageCtrll);
