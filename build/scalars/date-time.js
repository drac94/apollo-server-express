'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var apollo_server_express_1 = require('apollo-server-express');
var graphql_1 = require('graphql');
var typeDef = apollo_server_express_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(['\n  scalar DateTime\n'], ['\n  scalar DateTime\n']))
);
var DateTime = new graphql_1.GraphQLScalarType({
  name: 'DateTime',
  description: 'A DateTime representation in ISO format',
  parseValue: function (value) {
    return value;
  },
  serialize: function (value) {
    return value;
  },
  parseLiteral: function (ast) {
    if (ast.kind === graphql_1.Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});
exports.default = {
  typeDef: typeDef,
  resolvers: {
    DateTime: DateTime,
  },
};
var templateObject_1;
