import { Response } from 'express';
export declare class StaffController {
    list(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    create(req: any, res: Response): Promise<void>;
    update(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
}
export declare const staffController: StaffController;
//# sourceMappingURL=staff.controller.d.ts.map