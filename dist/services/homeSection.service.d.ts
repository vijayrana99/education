export declare class HomeSectionService {
    getHomeSections(params: any): Promise<{
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
    getHomeSectionById(id: string): Promise<{
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
    createHomeSection(data: any): Promise<{
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
    updateHomeSection(id: string, data: any): Promise<{
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
    deleteHomeSection(id: string): Promise<{
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
export declare const homeSectionService: HomeSectionService;
//# sourceMappingURL=homeSection.service.d.ts.map