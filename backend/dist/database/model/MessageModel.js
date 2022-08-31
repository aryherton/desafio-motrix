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
const mongoose_1 = __importDefault(require("mongoose"));
const message_1 = __importDefault(require("../schemas/message"));
class MessageModel {
    constructor(model = mongoose_1.default.model('messages', message_1.default)) {
        this.model = model;
    }
    ;
    create(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(message);
        });
    }
    ;
    getAll(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.model.find({ idUser });
            return message;
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = new mongoose_1.default.Types.ObjectId(id);
            const message = yield this.model.findOne({ _id });
            if (message) {
                return message;
            }
        });
    }
    ;
    updateMessage(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = new mongoose_1.default.Types.ObjectId(id);
            yield this.model.updateOne({ _id }, message);
        });
    }
    ;
    deleteMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = new mongoose_1.default.Types.ObjectId(id);
            yield this.model.deleteOne({ _id });
        });
    }
    ;
}
exports.default = MessageModel;
