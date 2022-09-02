"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Joi {
}
exports.default = Joi;
Joi.validReqBodyLogin = (obj) => joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(7).required(),
}).validate(obj).error;
Joi.validReqBodyRegister = (obj) => joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(7).required(),
}).validate(obj).error;
