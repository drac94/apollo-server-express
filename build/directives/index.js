"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_authenticated_1 = __importDefault(require("./is-authenticated"));
exports.default = {
    typeDefs: [is_authenticated_1.default.typeDef],
    schemaDirectives: {
        isAuthenticated: is_authenticated_1.default.directive,
    },
};
