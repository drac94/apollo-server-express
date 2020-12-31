"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = __importDefault(require("./login"));
var me_1 = __importDefault(require("./me"));
var signup_1 = __importDefault(require("./signup"));
var resolvers = {
    Query: {
        me: me_1.default,
    },
    Mutation: {
        login: login_1.default,
        signup: signup_1.default,
    },
};
exports.default = resolvers;
