export declare class HomeSectionAction {
    findAll(params: {
        type?: string;
        status?: string;
    }): Promise<{
        id: string;
        title: string | null;
        content: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        displayOrder: number;
        type: import(".prisma/client").$Enums.HomeSectionType;
        subtitle: string | null;
        link: string | null;
        linkText: string | null;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        title: string | null;
        content: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        displayOrder: number;
        type: import(".prisma/client").$Enums.HomeSectionType;
        subtitle: string | null;
        link: string | null;
        linkText: string | null;
    } | null>;
    create(data: any): Promise<{
        id: string;
        title: string | null;
        content: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        displayOrder: number;
        type: import(".prisma/client").$Enums.HomeSectionType;
        subtitle: string | null;
        link: string | null;
        linkText: string | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        title: string | null;
        content: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        displayOrder: number;
        type: import(".prisma/client").$Enums.HomeSectionType;
        subtitle: string | null;
        link: string | null;
        linkText: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string | null;
        content: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        displayOrder: number;
        type: import(".prisma/client").$Enums.HomeSectionType;
        subtitle: string | null;
        link: string | null;
        linkText: string | null;
    }>;
}
export declare const homeSectionAction: HomeSectionAction;
//# sourceMappingURL=homeSection.action.d.ts.map