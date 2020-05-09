export interface SourceS3Options {
    accessKeyId: string;
    secretAccessKey: string;
    bucketName: string;
    domain?: string;
    region?: string;
    protocol?: string;
}
export declare const sourceNodes: ({ actions, cache, createNodeId, getNodes, reporter, store }: {
    actions: any;
    cache: any;
    createNodeId: any;
    getNodes: any;
    reporter: any;
    store: any;
}, { accessKeyId, secretAccessKey, bucketName, domain, }: SourceS3Options) => Promise<any[]>;
export default sourceNodes;
