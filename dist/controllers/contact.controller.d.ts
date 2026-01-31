import { Response } from 'express';
export declare class ContactController {
    submit(req: any, res: Response): Promise<void>;
    list(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    updateStatus(req: any, res: Response): Promise<void>;
}
export declare const contactController: ContactController;
//# sourceMappingURL=contact.controller.d.ts.map