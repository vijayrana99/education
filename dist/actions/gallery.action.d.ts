export declare class GalleryAction {
    findAlbums(params: {
        limit?: number;
        offset?: number;
    }): Promise<{
        data: {
            id: string;
            title: string;
            slug: string;
            createdAt: Date;
            description: string | null;
            coverImage: string | null;
        }[];
        total: number;
    }>;
    findAlbumBySlug(slug: string): Promise<({
        images: {
            id: string;
            title: string | null;
            createdAt: Date;
            displayOrder: number;
            imageUrl: string;
            caption: string | null;
            albumId: string;
        }[];
    } & {
        id: string;
        title: string;
        slug: string;
        createdAt: Date;
        description: string | null;
        coverImage: string | null;
    }) | null>;
    findAlbumById(id: string): Promise<({
        images: {
            id: string;
            title: string | null;
            createdAt: Date;
            displayOrder: number;
            imageUrl: string;
            caption: string | null;
            albumId: string;
        }[];
    } & {
        id: string;
        title: string;
        slug: string;
        createdAt: Date;
        description: string | null;
        coverImage: string | null;
    }) | null>;
    createAlbum(data: any): Promise<{
        id: string;
        title: string;
        slug: string;
        createdAt: Date;
        description: string | null;
        coverImage: string | null;
    }>;
    deleteAlbum(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        createdAt: Date;
        description: string | null;
        coverImage: string | null;
    }>;
    createImage(albumId: string, data: any): Promise<{
        id: string;
        title: string | null;
        createdAt: Date;
        displayOrder: number;
        imageUrl: string;
        caption: string | null;
        albumId: string;
    }>;
    deleteImage(id: string): Promise<{
        id: string;
        title: string | null;
        createdAt: Date;
        displayOrder: number;
        imageUrl: string;
        caption: string | null;
        albumId: string;
    }>;
}
export declare const galleryAction: GalleryAction;
//# sourceMappingURL=gallery.action.d.ts.map