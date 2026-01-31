import prisma from '../lib/prisma'

export class SettingAction {
  async findAll() {
    const settings = await prisma.setting.findMany()
    return settings.reduce((acc: any, s: any) => {
      acc[s.key] = s.value
      return acc
    }, {})
  }

  async upsert(key: string, value: string) {
    return prisma.setting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    })
  }
}

export const settingAction = new SettingAction()
