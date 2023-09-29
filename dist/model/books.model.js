"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModel = void 0;
const sequelize_1 = require("sequelize");
const index_js_1 = require("../config/index.js");
class BooksModel extends sequelize_1.Model {
}
exports.BooksModel = BooksModel;
BooksModel.init({
    books_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    books_title: {
        type: sequelize_1.DataTypes.STRING,
    },
    money: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: 'books',
    timestamps: true,
    sequelize: index_js_1.newSequelize,
    paranoid: true,
    deletedAt: true,
});
