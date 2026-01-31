"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.errorHandler = errorHandler;
const library_1 = require("@prisma/client/runtime/library");
class ApiError extends Error {
    code;
    statusCode;
    details;
    constructor(code, message, statusCode = 500, details) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.details = details;
    }
}
exports.ApiError = ApiError;
function errorHandler(err, _req, res, _next) {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
                details: err.details,
            },
        });
        return;
    }
    if (err instanceof library_1.PrismaClientKnownRequestError) {
        const statusCode = err.code === 'P2002' ? 409 : 400;
        const code = err.code === 'P2002' ? 'CONFLICT' : 'DATABASE_ERROR';
        const message = err.code === 'P2002'
            ? 'A record with this value already exists'
            : 'Database operation failed';
        res.status(statusCode).json({
            error: { code, message, details: err.meta },
        });
        return;
    }
    console.error('Unexpected error:', err);
    res.status(500).json({
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'An unexpected error occurred',
        },
    });
}
//# sourceMappingURL=errorHandler.middleware.js.map