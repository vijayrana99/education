import { Response } from 'express';
export declare class GalleryController {
    listAlbums(req: any, res: Response): Promise<void>;
    getAlbumBySlug(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    createAlbum(req: any, res: Response): Promise<void>;
    deleteAlbum(req: any, res: Response): Promise<void>;
    createImage(req: any, res: Response): Promise<void>;
    deleteImage(req: any, res: Response): Promise<void>;
}
export declare const galleryController: GalleryController;
//# sourceMappingURL=gallery.controller.d.ts.map