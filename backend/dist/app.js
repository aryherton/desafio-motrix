"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Connections_1 = __importDefault(require("./database/model/Connections"));
const routes_1 = __importDefault(require("./routes"));
const Error_1 = __importDefault(require("./middlewares/Error"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.connect = (0, Connections_1.default)();
    }
    middleware() {
        this.app.use(Error_1.default);
    }
    routes() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(routes_1.default);
    }
    start(port) {
        this.app.listen(port, () => console.log('Listening at the door: ', port));
    }
}
exports.default = App;
