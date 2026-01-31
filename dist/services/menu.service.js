"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuService = exports.MenuService = void 0;
const menu_action_1 = require("../actions/menu.action");
class MenuService {
    async getMenus(location) {
        return menu_action_1.menuAction.findByLocation(location);
    }
    async getMenuById(id) {
        return menu_action_1.menuAction.findById(id);
    }
    async createMenu(data) {
        return menu_action_1.menuAction.create(data);
    }
    async updateMenu(id, data) {
        return menu_action_1.menuAction.update(id, data);
    }
    async deleteMenu(id) {
        return menu_action_1.menuAction.delete(id);
    }
}
exports.MenuService = MenuService;
exports.menuService = new MenuService();
//# sourceMappingURL=menu.service.js.map