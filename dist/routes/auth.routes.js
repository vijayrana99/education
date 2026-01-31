"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(1, 'Password is required'),
});
const router = (0, express_1.Router)();
exports.authRoutes = router;
router.post('/login', (0, validation_middleware_1.validate)(loginSchema), (req, res, next) => auth_controller_1.authController.login(req, res).catch(next));
router.get('/me', auth_middleware_1.auth, (req, res, next) => auth_controller_1.authController.me(req, res).catch(next));
//# sourceMappingURL=auth.routes.js.map