"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typeDefs = fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'src', 'modules', 'order', 'schema.gql'), 'utf8');
exports.default = { resolvers: resolvers_1.resolvers, typeDefs };
