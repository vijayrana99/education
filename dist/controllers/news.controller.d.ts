import { Response } from 'express';
export declare class NewsController {
    list(req: any, res: Response): Promise<void>;
    getBySlug(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    create(req: any, res: Response): Promise<void>;
    update(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
}
export declare const newsController: NewsController;
//# sourceMappingURL=news.controller.d.ts.map