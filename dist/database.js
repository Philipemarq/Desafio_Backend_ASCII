"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: path_1.default.join(__dirname, '..', 'database.sqlite'),
});
const connectDB = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('Database connected successfully.');
        await exports.sequelize.sync();
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=database.js.map