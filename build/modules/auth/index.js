"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var resolvers_1 = __importDefault(require("./resolvers"));
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    me: User @isAuthenticated\n  }\n\n  extend type Mutation {\n    login(email: String!, password: String!): AuthData\n\n    signup(email: String!, password: String!, firstName: String!, lastName: String!): User\n  }\n\n  type AuthData {\n    user: User\n    token: String!\n    tokenExpiration: String!\n  }\n\n  type User {\n    id: ID!\n    email: String!\n    firstName: String!\n    lastName: String!\n    created: DateTime!\n  }\n"], ["\n  extend type Query {\n    me: User @isAuthenticated\n  }\n\n  extend type Mutation {\n    login(email: String!, password: String!): AuthData\n\n    signup(email: String!, password: String!, firstName: String!, lastName: String!): User\n  }\n\n  type AuthData {\n    user: User\n    token: String!\n    tokenExpiration: String!\n  }\n\n  type User {\n    id: ID!\n    email: String!\n    firstName: String!\n    lastName: String!\n    created: DateTime!\n  }\n"])));
exports.default = {
    typeDefs: [typeDefs],
    resolvers: resolvers_1.default,
};
var templateObject_1;
