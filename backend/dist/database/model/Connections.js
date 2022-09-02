"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("../config"));
dotenv_1.default.config();
const user = process.env.USER_NAME;
const pswd = process.env.PASSWORD;
exports.default = (url = `mongodb+srv://${user}:${pswd}@motrix.ortsqdj.mongodb.net/?retryWrites=true&w=majority`) => (0, mongoose_1.connect)(url, config_1.default);
