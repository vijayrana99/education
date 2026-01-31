"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const zod_1 = require("zod");
function validate(schema) {
    return (req, _res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const formatted = error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message,
                }));
                next({
                    code: 'VALIDATION_ERROR',
                    message: 'Invalid input data',
                    statusCode: 400,
                    details: formatted,
                });
            }
            else {
                next(error);
            }
        }
    };
}
//# sourceMappingURL=validation.middleware.js.map