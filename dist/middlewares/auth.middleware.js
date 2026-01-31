"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
exports.requireRole = requireRole;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../lib/config");
const errorHandler_middleware_1 = require("./errorHandler.middleware");
function auth(req, _res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new errorHandler_middleware_1.ApiError('UNAUTHORIZED', 'Missing or invalid authorization header', 401);
    }
    const token = authHeader.substring(7);
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.config.jwtSecret);
        req.user = payload;
        next();
    }
    catch (error) {
        throw new errorHandler_middleware_1.ApiError('UNAUTHORIZED', 'Invalid or expired token', 401);
    }
}
function requireRole(role) {
    return (req, _res, next) => {
        if (!req.user) {
            throw new errorHandler_middleware_1.ApiError('UNAUTHORIZED', 'Authentication required', 401);
        }
        if (req.user.role !== 'ADMIN' && req.user.role !== role) {
            throw new errorHandler_middleware_1.ApiError('FORBIDDEN', 'Insufficient permissions', 403);
        }
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map