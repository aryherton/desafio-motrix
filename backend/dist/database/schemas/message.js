"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    idUser: String,
    title: String,
    description: String,
    status: String,
    priority: Number,
    historyUpdate: [
        {
            title: String,
            description: String,
            status: String,
            priority: Number,
            updatedAt: Date,
        },
    ]
}, { timestamps: true });
