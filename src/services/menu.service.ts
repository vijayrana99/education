import { menuAction } from '../actions/menu.action'

export class MenuService {
  async getMenus(location: 'HEADER' | 'FOOTER') {
    return menuAction.findByLocation(location)
  }

  async getMenuById(id: string) {
    return menuAction.findById(id)
  }

  async createMenu(data: any) {
    return menuAction.create(data)
  }

  async updateMenu(id: string, data: any) {
    return menuAction.update(id, data)
  }

  async deleteMenu(id: string) {
    return menuAction.delete(id)
  }
}

export const menuService = new MenuService()
