import { registerPlugin } from '@capacitor/core';

import type { IDnowPlugin } from './definitions';

const IDnow = registerPlugin<IDnowPlugin>('IDnow', {
  web: () => import('./web').then(m => new m.IDnowWeb()),
});

export * from './definitions';
export { IDnow };
