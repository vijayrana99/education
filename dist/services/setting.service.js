"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingService = exports.SettingService = void 0;
const setting_action_1 = require("../actions/setting.action");
class SettingService {
    async getSettings() {
        return setting_action_1.settingAction.findAll();
    }
    async updateSettings(settings) {
        const updates = Object.entries(settings).map(([key, value]) => setting_action_1.settingAction.upsert(key, value));
        await Promise.all(updates);
        return setting_action_1.settingAction.findAll();
    }
}
exports.SettingService = SettingService;
exports.settingService = new SettingService();
//# sourceMappingURL=setting.service.js.map