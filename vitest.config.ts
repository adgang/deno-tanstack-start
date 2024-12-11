import { defineConfig } from 'vitest/config';
import viteReact from '@vitejs/plugin-react';
import TanStackRouterVite from '@tanstack/router-plugin/vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },

  plugins: [
    // deno(),
    // viteDeno({}),
    // pluginDeno({

    // }),
    // pluginDeno( // env: "deno",
    //     // see configuration docs
    // ),
    TanStackRouterVite({
      enableRouteGeneration: false,
    }),
    // TanStackRouterVite({
    //   enableRouteGeneration: true,
    //   quoteStyle: 'single',
    //   routesDirectory: import.meta.dirname + '/app/routes',
    //   semicolons: true,
    // }),
    viteReact(),
    // ssr(),
  ],
});

console.log('import.meta.dirname');
console.log(import.meta.dirname);
