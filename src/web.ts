import { WebPlugin } from '@capacitor/core';

import type { IDnowPlugin, IdnowIdentOptions, IdnowOptions } from './definitions';

export class IDnowWeb extends WebPlugin implements IDnowPlugin {
  
  checkPermissions(): Promise<PermissionStatus> {
    throw new Error('Method not implemented.');
  }
  requestPermissions(): Promise<PermissionStatus> {
    throw new Error('Method not implemented.');
  }
  
  initialize(_options: IdnowOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }
  sartIdent(_options: IdnowIdentOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  removeAllListeners(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
