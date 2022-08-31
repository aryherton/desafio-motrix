"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserCtrll_1 = __importDefault(require("../controller/UserCtrll"));
const ValidLoginMidd_1 = __importDefault(require("../middlewares/ValidLoginMidd"));
const ctrll = new UserCtrll_1.default();
const router = (0, express_1.Router)();
exports.default = router
    .get('/', ValidLoginMidd_1.default.validLoginBody, ctrll.checkLogin)
    .get('/message', ctrll.getUser)
    .post('/', ValidLoginMidd_1.default.validLoginRegister, ctrll.createUser);
