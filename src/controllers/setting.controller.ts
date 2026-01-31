import { Response } from 'express'
import { settingService } from '../services/setting.service'

export class SettingController {
  async get(_req: any, res: Response) {
    const settings = await settingService.getSettings()
    res.json({ data: settings })
  }

  async update(req: any, res: Response) {
    const settings = await settingService.updateSettings(req.body)
    res.json({ data: settings })
  }
}

export const settingController = new SettingController()
