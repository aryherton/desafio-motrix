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
const MessageModel_1 = __importDefault(require("../database/model/MessageModel"));
class Message {
    constructor(messageModel = new MessageModel_1.default()) {
        this.messageModel = messageModel;
    }
    setMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const mess = yield this.messageModel.create(message);
            return mess;
        });
    }
    ;
    getAllMessage(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messageModel.getAll(idUser);
            return message;
        });
    }
    getMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messageModel.getById(id);
            return message;
        });
    }
    ;
    updateMessage(id, newMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.getMessage(id);
            yield this.messageModel.updateMessage(id, newMessage);
            let tmpMess = yield this.getMessage(id);
            if (tmpMess && message) {
                tmpMess.historyUpdate.push({
                    title: message.title,
                    description: message.description,
                    status: message.status,
                    priority: message.priority,
                    updatedAt: new Date(),
                });
                yield this.messageModel.updateMessage(id, tmpMess);
            }
        });
    }
    ;
    deleteMessage(arrMessDel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(arrMessDel.map((id) => __awaiter(this, void 0, void 0, function* () {
                yield this.messageModel.deleteMessage(id);
            })));
        });
    }
    ;
}
exports.default = Message;
