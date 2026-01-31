"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async login(req, res) {
        const result = await (0, auth_service_1.login)(req.body);
        res.json(result);
    }
    async me(req, res) {
        if (!req.user) {
            res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Authentication required' } });
            return;
        }
        const user = await (0, auth_service_1.getMe)(req.user.userId);
        res.json({ user });
    }
}
exports.AuthController = AuthController;
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map