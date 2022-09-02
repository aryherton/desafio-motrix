"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi_1 = __importDefault(require("../help/Joi"));
const statusHttp_1 = __importDefault(require("../enum/statusHttp"));
const messageRes_1 = __importDefault(require("../enum/messageRes"));
// import Errors from '../error/ClassErrors';
class ValidLogin {
    static validLoginBody(req, res, next) {
        try {
            const { email, password } = req.body;
            const erro = Joi_1.default.validReqBodyLogin({ email, password });
            if (erro) {
                return res.status(statusHttp_1.default.BAD_REQUEST).json({ message: erro.message });
                // throw Errors.notFound(erro.message);
            }
            next();
        }
        catch (e) {
            console.log(e);
            // next(e);
            return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
        }
    }
    static validLoginRegister(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const erro = Joi_1.default.validReqBodyRegister({ name, email, password });
            if (erro) {
                return res.status(statusHttp_1.default.BAD_REQUEST).json({ message: erro.message });
            }
            next();
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.default = ValidLogin;
