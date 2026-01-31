import { Response } from 'express';
export declare class NewsCategoryController {
    list(_req: any, res: Response): Promise<void>;
    getBySlug(req: any, res: Response): Promise<void>;
    create(req: any, res: Response): Promise<void>;
    update(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
}
export declare const newsCategoryController: NewsCategoryController;
//# sourceMappingURL=newsCategory.controller.d.ts.map