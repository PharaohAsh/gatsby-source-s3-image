import { S3 } from 'aws-sdk';
import { FileSystemNode } from 'gatsby-source-filesystem';
import EntityNode from './types/EntityNode';
export declare const S3SourceGatsbyNodeType = "S3ImageAsset";
export declare const createS3Instance: ({ accessKeyId, domain, secretAccessKey }: {
    accessKeyId: any;
    domain: any;
    secretAccessKey: any;
}) => S3;
export declare const isImage: (entity: S3.Object) => boolean;
export declare const getEntityNodeFields: ({ entity, fileNode, }: {
    entity: S3.Object;
    fileNode: FileSystemNode;
}) => EntityNode;
export declare const constructS3UrlForAsset: ({ bucketName, domain, region, key, protocol, }: {
    bucketName: string;
    domain: string;
    region?: string | undefined;
    key: string;
    protocol?: string | undefined;
}) => string;
export declare const createS3ImageAssetNode: ({ createNode, createNodeId, entity, fileNode, url, }: {
    createNode: Function;
    createNodeId: (objectHash: string) => string;
    entity: S3.Object;
    fileNode: FileSystemNode;
    url: string;
}) => any;
