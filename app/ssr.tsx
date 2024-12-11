/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from 'npm:@tanstack/start/server';
import { getRouterManifest } from 'npm:@tanstack/start/router-manifest';

import { createRouter } from './router.tsx';

export default createStartHandler({
  createRouter: (...args) => {
    console.log({ args });
    return createRouter(...args);
  },

  getRouterManifest: (...args) => {
    console.log({ argsMain: args });
    return getRouterManifest(...args);
  },
})(defaultStreamHandler);
