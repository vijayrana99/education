"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const public_routes_1 = require("./public.routes");
const admin_routes_1 = require("./admin.routes");
const auth_routes_1 = require("./auth.routes");
const router = (0, express_1.Router)();
exports.routes = router;
router.use('/', public_routes_1.publicRoutes);
router.use('/auth', auth_routes_1.authRoutes);
router.use('/admin', admin_routes_1.adminRoutes);
//# sourceMappingURL=index.js.map