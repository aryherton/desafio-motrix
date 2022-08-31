"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusHttp_1 = __importDefault(require("../enum/statusHttp"));
const messageRes_1 = __importDefault(require("../enum/messageRes"));
const Token_1 = __importDefault(require("../help/Token"));
const Message_1 = __importDefault(require("../services/Message"));
class MessageCtrll {
    // constructor(private messageServ = new MessageServ()) {}
    setMessageCtrll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                let message = req.body;
                if (authorization) {
                    const user = Token_1.default.validToken(authorization);
                    const messageServ = new Message_1.default();
                    message.idUser = user._id;
                    yield messageServ.setMessage(message);
                    return res.status(statusHttp_1.default.OK).json({ message: messageRes_1.default.SUCCESS_RECORD });
                }
                return res.status(statusHttp_1.default.NO_CONTENT).json({ message: messageRes_1.default.NOT_TOKEN });
            }
            catch (e) {
                console.log(e);
                return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
            }
        });
    }
    ;
    updateMessageCtrll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                const message = req.body;
                if (authorization) {
                    Token_1.default.validToken(authorization);
                    const messageServ = new Message_1.default();
                    yield messageServ.updateMessage(message._id, message);
                    return res.status(statusHttp_1.default.OK).json({ message: messageRes_1.default.UPDATE_SUCCESS });
                }
                return res.status(statusHttp_1.default.NO_CONTENT).json({ message: messageRes_1.default.NOT_TOKEN });
            }
            catch (e) {
                console.log(e);
                return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
            }
        });
    }
    ;
    deleteMessageCtrll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                const arrMessDel = req.body;
                if (authorization) {
                    const user = Token_1.default.validToken(authorization);
                    const messageServ = new Message_1.default();
                    yield messageServ
                        .deleteMessage(arrMessDel);
                    return res.status(statusHttp_1.default.OK).json({ message: messageRes_1.default.DELETE_SUCCESS });
                }
                return res.status(statusHttp_1.default.NO_CONTENT).json({ message: messageRes_1.default.NOT_TOKEN });
            }
            catch (e) {
                console.log(e);
                return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
            }
        });
    }
    ;
}
exports.default = MessageCtrll;
