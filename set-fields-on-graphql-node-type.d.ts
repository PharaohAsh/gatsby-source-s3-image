import S3ImageAssetNode from './types/S3ImageAssetNode';
interface ExtendNodeTypeOptions {
    type: {
        name: string;
    };
}
declare const _default: ({ type }: ExtendNodeTypeOptions) => Promise<void> | Promise<{
    ETag: {
        type: any;
    };
    EXIF: {
        resolve: (image: S3ImageAssetNode) => {
            name: string;
        } | {
            DateCreatedISO?: string | undefined;
            DateTimeOriginal?: number | undefined;
            DocumentName?: string | undefined;
            ExposureTime?: number | undefined;
            Exposure?: string | undefined;
            FNumber?: number | undefined;
            FocalLength?: number | undefined;
            ImageDescription?: string | undefined;
            ISO?: number | undefined;
            LensModel?: string | undefined;
            Model?: string | undefined;
            ShutterSpeedFraction?: string | undefined;
            ShutterSpeedValue?: string | undefined;
            UserComment?: string | undefined;
            name: string;
        };
        type: any;
    };
    Key: {
        type: any;
    };
}>;
export default _default;
