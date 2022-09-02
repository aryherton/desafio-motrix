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
const users_1 = __importDefault(require("../schemas/users"));
class UsersModel {
    constructor(model = mongoose_1.default.model('users', users_1.default)) {
        this.model = model;
    }
    ;
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(user);
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({}, { password: 0 });
        });
    }
    ;
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ email }, { password: 0 });
        });
    }
    ;
    getPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.findOne({ email }, { password: 1 });
            const pswd = user === null || user === void 0 ? void 0 : user.password;
            if (pswd) {
                return pswd;
            }
        });
    }
    ;
    updateUser(email, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.updateOne({ email }, user);
        });
    }
    ;
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: id });
        });
    }
    ;
}
exports.default = UsersModel;
