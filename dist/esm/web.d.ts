import { WebPlugin } from '@capacitor/core';
import type { IDnowPlugin, IdnowIdentOptions, IdnowOptions } from './definitions';
export declare class IDnowWeb extends WebPlugin implements IDnowPlugin {
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    initialize(_options: IdnowOptions): Promise<void>;
    sartIdent(_options: IdnowIdentOptions): Promise<void>;
    removeAllListeners(): Promise<void>;
}
