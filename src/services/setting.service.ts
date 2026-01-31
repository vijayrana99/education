import { settingAction } from '../actions/setting.action'

export class SettingService {
  async getSettings() {
    return settingAction.findAll()
  }

  async updateSettings(settings: Record<string, string>) {
    const updates = Object.entries(settings).map(([key, value]) => settingAction.upsert(key, value))
    await Promise.all(updates)
    return settingAction.findAll()
  }
}

export const settingService = new SettingService()
