"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_model_1 = require("../../model/index.model");
const resolvers = {
    Mutation: {
        orderCreate: async (_, argus) => {
            const order = await index_model_1.Order.create(argus);
            return {
                status: 200,
                message: 'Connectd',
                data: order,
            };
        },
    },
};
exports.resolvers = resolvers;
