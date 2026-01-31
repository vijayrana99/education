"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuController = exports.MenuController = void 0;
const menu_service_1 = require("../services/menu.service");
class MenuController {
    async list(req, res) {
        const menus = await menu_service_1.menuService.getMenus(req.query.location || 'HEADER');
        res.json({ data: menus });
    }
    async getById(req, res) {
        const menu = await menu_service_1.menuService.getMenuById(req.params.id);
        res.json({ data: menu });
    }
    async create(req, res) {
        const menu = await menu_service_1.menuService.createMenu(req.body);
        res.status(201).json({ data: menu });
    }
    async update(req, res) {
        const menu = await menu_service_1.menuService.updateMenu(req.params.id, req.body);
        res.json({ data: menu });
    }
    async delete(req, res) {
        await menu_service_1.menuService.deleteMenu(req.params.id);
        res.status(204).send();
    }
}
exports.MenuController = MenuController;
exports.menuController = new MenuController();
//# sourceMappingURL=menu.controller.js.map