export declare class ContactAction {
    create(data: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    }>;
    findAll(params: {
        limit?: number;
        offset?: number;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            status: import(".prisma/client").$Enums.ContactStatus;
            createdAt: Date;
            name: string;
            email: string;
            subject: string | null;
            message: string;
        }[];
        total: number;
    }>;
    findById(id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    } | null>;
    updateStatus(id: string, status: 'NEW' | 'READ' | 'RESPONDED'): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    }>;
}
export declare const contactAction: ContactAction;
//# sourceMappingURL=contact.action.d.ts.map