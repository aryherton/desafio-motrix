"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY || 'ebytrKey';
class Token {
}
exports.default = Token;
Token.createdToken = (email, password) => {
    try {
        return jsonwebtoken_1.default
            .sign({
            email,
            password,
        }, SECRET_KEY, { expiresIn: '31d' });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('Class Token :', error.message);
        }
    }
};
Token.validToken = (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
};
