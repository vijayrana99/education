export declare class GalleryService {
    getAlbums(params: any): Promise<{
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
    getAlbumBySlug(slug: string): Promise<{
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
    }>;
    getAlbumById(id: string): Promise<{
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
    }>;
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
export declare const galleryService: GalleryService;
//# sourceMappingURL=gallery.service.d.ts.map