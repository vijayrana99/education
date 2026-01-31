import { Response } from 'express'
import { menuService } from '../services/menu.service'

export class MenuController {
  async list(req: any, res: Response) {
    const menus = await menuService.getMenus(req.query.location || 'HEADER')
    res.json({ data: menus })
  }

  async getById(req: any, res: Response) {
    const menu = await menuService.getMenuById(req.params.id)
    res.json({ data: menu })
  }

  async create(req: any, res: Response) {
    const menu = await menuService.createMenu(req.body)
    res.status(201).json({ data: menu })
  }

  async update(req: any, res: Response) {
    const menu = await menuService.updateMenu(req.params.id, req.body)
    res.json({ data: menu })
  }

  async delete(req: any, res: Response) {
    await menuService.deleteMenu(req.params.id)
    res.status(204).send()
  }
}

export const menuController = new MenuController()
