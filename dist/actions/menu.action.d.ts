export declare class MenuAction {
    findByLocation(location: 'HEADER' | 'FOOTER'): Promise<({
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
    findById(id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    } | null>;
    create(data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        name: string;
        location: import(".prisma/client").$Enums.MenuLocation;
        displayOrder: number;
        parentId: string | null;
        url: string;
    }>;
    delete(id: string): Promise<{
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
export declare const menuAction: MenuAction;
//# sourceMappingURL=menu.action.d.ts.map