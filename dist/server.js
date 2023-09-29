"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const index_1 = __importDefault(require("./modules/index"));
const index_2 = require("./config/index");
async function main() {
    await (0, index_2.newMongoConnect)('mongodb://127.0.0.1:27017/homwork');
    const server = new server_1.ApolloServer({
        schema: index_1.default
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server);
    console.log(`🚀 Server ready at ${url}`);
}
main();
