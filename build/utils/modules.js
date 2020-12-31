"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var deepmerge_1 = __importDefault(require("deepmerge"));
var directives_1 = __importDefault(require("../directives"));
var scalars_1 = __importDefault(require("../scalars"));
var globalTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query\n  type Mutation\n"], ["\n  type Query\n  type Mutation\n"])));
var makeExecutableSchemaFromModules = function (_a) {
    var modules = _a.modules;
    var typeDefs = __spreadArrays([globalTypeDefs], scalars_1.default.typeDefs, directives_1.default.typeDefs);
    var resolvers = __assign({}, scalars_1.default.resolvers);
    modules.forEach(function (module) {
        typeDefs = __spreadArrays(typeDefs, module.typeDefs);
        resolvers = deepmerge_1.default(resolvers, module.resolvers);
    });
    return apollo_server_express_1.makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers,
        schemaDirectives: __assign({}, directives_1.default.schemaDirectives),
    });
};
exports.default = makeExecutableSchemaFromModules;
var templateObject_1;
