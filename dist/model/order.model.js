"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const sequelize_1 = require("sequelize");
const index_js_1 = require("../config/index.js");
class OrderModel extends sequelize_1.Model {
}
exports.OrderModel = OrderModel;
OrderModel.init({
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
}, {
    tableName: 'order',
    timestamps: true,
    sequelize: index_js_1.newSequelize,
    paranoid: true,
    deletedAt: true,
});
