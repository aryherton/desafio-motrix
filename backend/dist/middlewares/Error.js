"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageRes_1 = __importDefault(require("../enum/messageRes"));
const statusHttp_1 = __importDefault(require("../enum/statusHttp"));
const middlewareError = (err, _req, res, _next) => {
    if (err.statusCode) {
        return res
            .status(err.statusCode)
            .json({ message: err.message });
    }
    console.log(err);
    res
        .status(statusHttp_1.default.SERVER_ERROR)
        .json({ message: messageRes_1.default.ERROR_SERVER });
};
exports.default = middlewareError;
