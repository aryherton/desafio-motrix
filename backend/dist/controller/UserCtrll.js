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
const User_1 = __importDefault(require("../services/User"));
const Message_1 = __importDefault(require("../services/Message"));
const statusHttp_1 = __importDefault(require("../enum/statusHttp"));
const messageRes_1 = __importDefault(require("../enum/messageRes"));
const ClassErrors_1 = __importDefault(require("../error/ClassErrors"));
const Token_1 = __importDefault(require("../help/Token"));
class UserCtrll {
    constructor(userServ = new User_1.default(), messageServ = new Message_1.default()) {
        this.userServ = userServ;
        this.messageServ = messageServ;
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const checkUser = yield this.userServ.getUserByEmail(email);
                if (checkUser) {
                    return res.status(statusHttp_1.default.UNAUTHORIZED).json({ message: messageRes_1.default.ALREADY_REGISTERED });
                }
                const token = yield this.userServ.insertUser({ name, email, password });
                return res.status(statusHttp_1.default.CREATED).json({ message: messageRes_1.default.LOGIN_SUCCESS, token });
            }
            catch (e) {
                console.log(e);
                return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
            }
        });
        this.checkLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.userServ.validUser(email, password);
                if (token) {
                    return res.status(statusHttp_1.default.OK).json({ message: messageRes_1.default.LOGIN_SUCCESS, token });
                }
                throw ClassErrors_1.default.notFound(messageRes_1.default.INCORRECT);
            }
            catch (e) {
                console.log(e);
                // next(e);
                return res.status(statusHttp_1.default.NOT_FOUND).json({ message: e.message });
            }
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                if (authorization) {
                    const user = Token_1.default.validToken(authorization);
                    const userData = yield this.userServ.getUserByEmail(user.email);
                    const arrMessage = yield this.messageServ.getAllMessage(user._id);
                    return res.status(statusHttp_1.default.OK).json({
                        name: userData.name,
                        email: userData.email,
                        arrMessage
                    });
                }
                return res.status(statusHttp_1.default.NO_CONTENT).json({ message: messageRes_1.default.NOT_TOKEN });
            }
            catch (e) {
                console.log(e);
                return res.status(statusHttp_1.default.SERVER_ERROR).json({ message: messageRes_1.default.ERROR_SERVER });
            }
        });
    }
}
exports.default = UserCtrll;
