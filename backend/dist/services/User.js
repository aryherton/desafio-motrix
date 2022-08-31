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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UsersModel_1 = __importDefault(require("../database/model/UsersModel"));
const Token_1 = __importDefault(require("../help/Token"));
class User {
    constructor(userModel = new UsersModel_1.default) {
        this.userModel = userModel;
    }
    ;
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.getAll();
        });
    }
    ;
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.getByEmail(email);
        });
    }
    ;
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const pswd = bcryptjs_1.default.hashSync(user.password, 10);
            yield this.userModel.create(Object.assign(Object.assign({}, user), { password: pswd }));
            const token = this.getToken(user.email, user.password);
            return token;
        });
    }
    validUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const pswd = yield this.userModel.getPassword(email);
            console.log(pswd, 'data');
            if (pswd) {
                const checkPswd = yield bcryptjs_1.default.compare(password, pswd);
                if (checkPswd) {
                    const token = this.getToken(email, password);
                    return token;
                }
            }
        });
    }
    getToken(email, password) {
        const token = Token_1.default.createdToken(email, password);
        return token;
    }
    updateUser(email, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userModel.updateUser(email, user);
        });
    }
}
exports.default = User;
