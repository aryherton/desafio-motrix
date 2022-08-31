"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoute_1 = __importDefault(require("./UserRoute"));
const MessageRoute_1 = __importDefault(require("./MessageRoute"));
const routes = (0, express_1.Router)();
exports.default = routes
    .use('/user', UserRoute_1.default)
    .use('/message', MessageRoute_1.default);
