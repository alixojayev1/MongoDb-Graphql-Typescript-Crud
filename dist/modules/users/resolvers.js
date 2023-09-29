"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_1 = require("graphql");
const user_model_1 = require("../../model/user.model");
const resolvers = {
    Query: {
        user: async (_, { username }) => {
            try {
                const user = await user_model_1.UserModel.findOne({ username });
                if (!user) {
                    return new graphql_1.GraphQLError("user is not found");
                }
            }
            catch (error) {
                return new graphql_1.GraphQLError(error.message, {
                    extensions: {
                        code: "Server Error ",
                    },
                });
            }
        },
    },
    Mutation: {
        user: async (_, { username, password }) => {
            try {
                let user = await user_model_1.UserModel.findOne({ username });
                if (user) {
                    return new graphql_1.GraphQLError("user already exists");
                }
                user = await new user_model_1.UserModel({
                    username,
                    password,
                }).save();
                return user;
            }
            catch (error) {
                return new graphql_1.GraphQLError(error.message);
            }
        },
        deleteUser: async (_, { id }) => {
            try {
                const user = await user_model_1.UserModel.findOne({ _id: id });
                if (!user) {
                    return new graphql_1.GraphQLError("user is not found ");
                }
                await user_model_1.UserModel.deleteOne({ _id: id });
                return "user delete";
            }
            catch (error) {
                return new graphql_1.GraphQLError(error.message, {
                    extensions: {
                        code: "Server Error ",
                    },
                });
            }
        },
        updateUser: async (_, { id, username, password }) => {
            try {
                const user = await user_model_1.UserModel.findById(id);
                if (!user) {
                    throw new Error('User not found');
                }
                if (username) {
                    user.username = username;
                }
                if (password) {
                    user.password = password;
                }
                await user.save();
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        },
    },
};
exports.resolvers = resolvers;
