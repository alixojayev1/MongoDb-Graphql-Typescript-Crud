"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_model_1 = require("../../model/index.model");
const resolvers = {
    Query: {
        books: async () => {
            const books = await index_model_1.Books.findAll({
                include: index_model_1.User,
            });
            return books;
        },
    },
    Mutation: {
        bookCreate: async (_, argus) => {
            const user = await index_model_1.Books.create(argus);
            return {
                status: 200,
                message: 'Connectd',
                data: user,
            };
        },
    },
};
exports.resolvers = resolvers;
