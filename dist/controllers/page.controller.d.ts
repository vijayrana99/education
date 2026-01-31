import { Response } from 'express';
export declare class PageController {
    list(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    create(req: any, res: Response): Promise<void>;
    update(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
}
export declare const pageController: PageController;
//# sourceMappingURL=page.controller.d.ts.map