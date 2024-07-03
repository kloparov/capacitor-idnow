import { registerPlugin } from '@capacitor/core';
const IDnow = registerPlugin('IDnow', {
    web: () => import('./web').then(m => new m.IDnowWeb()),
});
export * from './definitions';
export { IDnow };
//# sourceMappingURL=index.js.map