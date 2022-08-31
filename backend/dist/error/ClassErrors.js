"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusHttp_1 = __importDefault(require("../enum/statusHttp"));
class Errors {
    static notFound(message) {
        return {
            message,
            statusCode: statusHttp_1.default.NOT_FOUND,
            stack: Error().stack,
        };
    }
    static conflict(message) {
        return {
            message,
            statusCode: statusHttp_1.default.CONFLICT,
            stack: Error().stack,
        };
    }
}
exports.default = Errors;
