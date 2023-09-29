"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function newMongoConnect(url) {
    try {
        await mongoose_1.default.connect(url);
        return mongoose_1.default;
    }
    catch (error) {
        return error;
    }
}
exports.newMongoConnect = newMongoConnect;
