import { IResolvers } from "@graphql-tools/utils";
import { GraphQLError } from "graphql";
import { UserModel } from "../../model/user.model";
const resolvers: IResolvers = {
  Query: {
    user: async (_, { username }) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) {
          return new GraphQLError("user is not found");
        }
      } catch (error: any) {
        return new GraphQLError(error.message, {
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
        let user = await UserModel.findOne({ username });
        if (user) {
          return new GraphQLError("user already exists");
        }
        user = await new UserModel({
          username,
          password,
        }).save();
        return user;
      } catch (error: any) {
        return new GraphQLError(error.message);
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await UserModel.findOne({ _id: id });
        if (!user) {
          return new GraphQLError("user is not found ");
        }
        await UserModel.deleteOne({ _id: id });
        return "user delete";
      } catch (error: any) {
        return new GraphQLError(error.message, {
          extensions: {
            code: "Server Error ",
          },
        });
      }
    },
    updateUser: async (_, { id, username, password }) => {
      try {
        const user = await UserModel.findById(id);

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
      } catch (error:any) {
        throw new Error(error.message);
      }
    },
  },
};

export { resolvers };
