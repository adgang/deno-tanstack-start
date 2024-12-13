// app/router.tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router';

import routerNameSpace from '@tanstack/react-router';

import { routeTree } from './routeTree.gen.ts';

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
  });

  return router;
}

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: ReturnType<typeof createRouter>;
//   }
// }

declare global {
  namespace routerNameSpace {
    interface Register {
      router: ReturnType<typeof createRouter>;
    }
  }
}
