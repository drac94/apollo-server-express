"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = process.env, PORT = _a.PORT, MONGODB_URI = _a.MONGODB_URI, WORKERS = _a.WORKERS, JWT_LIFE_TIME = _a.JWT_LIFE_TIME, JWT_SECRET = _a.JWT_SECRET;
exports.default = {
    Port: PORT || 5000,
    MongoDbURI: MONGODB_URI || '',
    Workers: WORKERS || 1,
    JwtLifeTime: JWT_LIFE_TIME || '7d',
    JwtSecret: JWT_SECRET || '',
};
