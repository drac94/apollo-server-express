'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var modules_1 = __importDefault(require('../utils/modules'));
var auth_1 = __importDefault(require('./auth'));
exports.default = modules_1.default({
  modules: [auth_1.default],
});
