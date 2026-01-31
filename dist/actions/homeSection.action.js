"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeSectionAction = exports.HomeSectionAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class HomeSectionAction {
    async findAll(params) {
        return prisma_1.default.homeSection.findMany({
            where: { type: params.type, status: params.status },
            orderBy: { displayOrder: 'asc' },
        });
    }
    async findById(id) {
        return prisma_1.default.homeSection.findUnique({ where: { id } });
    }
    async create(data) {
        return prisma_1.default.homeSection.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.homeSection.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.homeSection.delete({ where: { id } });
    }
}
exports.HomeSectionAction = HomeSectionAction;
exports.homeSectionAction = new HomeSectionAction();
//# sourceMappingURL=homeSection.action.js.map