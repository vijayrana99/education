export declare class MenuService {
    getMenus(location: 'HEADER' | 'FOOTER'): Promise<({
        children: {
            id: string;
            title: string;
            createdAt: Date;
            name: string;
            location: import(".prisma/client").$Enums.MenuLocation;
            displayOrder: number;
            parentId: string | null;
            url: string;
        }[];
    } & {
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    })[]>;
    getMenuById(id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    } | null>;
    createMenu(data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    }>;
    updateMenu(id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    }>;
    deleteMenu(id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    }>;
}
export declare const menuService: MenuService;
//# sourceMappingURL=menu.service.d.ts.map