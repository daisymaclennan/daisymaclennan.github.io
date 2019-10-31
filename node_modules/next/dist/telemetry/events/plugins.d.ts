declare type EventPackageDetected = {
    packageName: string;
    packageVersion: string;
};
export declare function eventNextPlugins(dir: string): Promise<Array<{
    eventName: string;
    payload: EventPackageDetected;
}>>;
export {};
