"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var create = function (userId) {
    return new Promise(function (resolve, reject) {
        jsonwebtoken_1.default.sign({
            userId: userId,
        }, config_1.default.JwtSecret, {
            expiresIn: config_1.default.JwtLifeTime,
        }, function (error, token) {
            if (error) {
                reject(error);
            }
            resolve(token);
        });
    });
};
var getDecodedToken = function (token) {
    return new Promise(function (resolve, reject) {
        jsonwebtoken_1.default.verify(token, config_1.default.JwtSecret, function (error, decoded) {
            var decodedToken = decoded;
            if (error) {
                reject(error);
            }
            if (!decodedToken.exp || !decodedToken.iat) {
                reject(new Error("Token had no 'exp' or 'iat' payload"));
            }
            resolve(decodedToken);
        });
    });
};
exports.default = {
    create: create,
    getDecodedToken: getDecodedToken,
};
