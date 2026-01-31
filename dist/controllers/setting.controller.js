"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingController = exports.SettingController = void 0;
const setting_service_1 = require("../services/setting.service");
class SettingController {
    async get(_req, res) {
        const settings = await setting_service_1.settingService.getSettings();
        res.json({ data: settings });
    }
    async update(req, res) {
        const settings = await setting_service_1.settingService.updateSettings(req.body);
        res.json({ data: settings });
    }
}
exports.SettingController = SettingController;
exports.settingController = new SettingController();
//# sourceMappingURL=setting.controller.js.map