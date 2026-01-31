"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingAction = exports.SettingAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class SettingAction {
    async findAll() {
        const settings = await prisma_1.default.setting.findMany();
        return settings.reduce((acc, s) => {
            acc[s.key] = s.value;
            return acc;
        }, {});
    }
    async upsert(key, value) {
        return prisma_1.default.setting.upsert({
            where: { key },
            update: { value },
            create: { key, value },
        });
    }
}
exports.SettingAction = SettingAction;
exports.settingAction = new SettingAction();
//# sourceMappingURL=setting.action.js.map