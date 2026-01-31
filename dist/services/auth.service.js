"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.getMe = getMe;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const config_1 = require("../lib/config");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
async function login(input) {
    const user = await prisma_1.default.user.findUnique({
        where: { email: input.email },
    });
    if (!user) {
        throw new errorHandler_middleware_1.ApiError('UNAUTHORIZED', 'Invalid email or password', 401);
    }
    const isPasswordValid = await (0, bcryptjs_1.compare)(input.password, user.passwordHash);
    if (!isPasswordValid) {
        throw new errorHandler_middleware_1.ApiError('UNAUTHORIZED', 'Invalid email or password', 401);
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, role: user.role }, config_1.config.jwtSecret, { expiresIn: '7d' });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        },
    };
}
async function getMe(userId) {
    const user = await prisma_1.default.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'User not found', 404);
    }
    return user;
}
//# sourceMappingURL=auth.service.js.map