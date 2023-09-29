"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Books = exports.User = void 0;
const books_model_1 = require("./books.model");
Object.defineProperty(exports, "Books", { enumerable: true, get: function () { return books_model_1.BooksModel; } });
const order_model_1 = require("./order.model");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return order_model_1.OrderModel; } });
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.UserModel; } });
user_model_1.UserModel.belongsToMany(books_model_1.BooksModel, {
    through: order_model_1.OrderModel,
    foreignKey: 'users_id',
});
books_model_1.BooksModel.belongsToMany(user_model_1.UserModel, {
    through: order_model_1.OrderModel,
    foreignKey: 'books_id',
});
async function func() {
    await user_model_1.UserModel.sync({ alter: true });
    await books_model_1.BooksModel.sync({ alter: true });
    await order_model_1.OrderModel.sync({ alter: true });
}
func();
