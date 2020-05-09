import ExifData from './ExifData';
export default interface S3ImageAssetNode {
    id: string;
    absolutePath: string;
    LastModified: Date;
    ETag: string;
    Key: string;
    EXIF: ExifData | null;
    internal: {
        content: string;
        contentDigest: string;
        mediaType: string;
        type: string;
    };
}
