"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuAction = exports.MenuAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class MenuAction {
    async findByLocation(location) {
        return prisma_1.default.menu.findMany({
            where: { location, parentId: null },
            orderBy: { displayOrder: 'asc' },
            include: { children: { orderBy: { displayOrder: 'asc' } } },
        });
    }
    async findById(id) {
        return prisma_1.default.menu.findUnique({ where: { id } });
    }
    async create(data) {
        return prisma_1.default.menu.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.menu.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.menu.delete({ where: { id } });
    }
}
exports.MenuAction = MenuAction;
exports.menuAction = new MenuAction();
//# sourceMappingURL=menu.action.js.map