export declare class ContactService {
    submitContact(data: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    }>;
    getContactSubmissions(params: any): Promise<{
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
    getContactSubmission(id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    } | null>;
    updateContactStatus(id: string, status: 'NEW' | 'READ' | 'RESPONDED'): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContactStatus;
        createdAt: Date;
        name: string;
        email: string;
        subject: string | null;
        message: string;
    }>;
}
export declare const contactService: ContactService;
//# sourceMappingURL=contact.service.d.ts.map