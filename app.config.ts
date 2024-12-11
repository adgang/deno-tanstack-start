// app.config.ts

import viteReact from '@vitejs/plugin-react';
// import  from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import { defineConfig } from '@tanstack/start/config';
// import ssr from "npm:vite-plugin-ssr@^0.4.69/plugin";
import path from 'node:path';

export default defineConfig({
  tsr: {
    addExtensions: true,
    routesDirectory: 'src/routes',
  },
  vite: {
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
        routesDirectory: 'app/routes',
        semicolons: true,
        addExtensions: true,
      }),
      viteReact(),
      // ssr(),
    ],
    // ssr: {},
    // resolve: {
    //   // alias: [
    //   //   // {},
    //   //   {
    //   //     find: 'npm:@tanstack/start/server',
    //   //     replacement: path.resolve(
    //   //       import.meta.dirname,
    //   //       './node_modules/@tanstack/start/dist/esm/server',
    //   //     ),
    //   //   },
    //   //   // {
    //   //   //   find: '@tanstack/start/server',
    //   //   //   replacement: path.resolve(
    //   //   //     import.meta.dirname,
    //   //   //     './node_modules/@tanstack/start/dist/esm/server',
    //   //   //   ),
    //   //   // },
    //   //   {
    //   //     find: 'npm:@tanstack/start/router-manifest',
    //   //     replacement: path.resolve(
    //   //       import.meta.dirname,
    //   //       './node_modules/@tanstack/start/dist/esm/router-manifest',
    //   //     ),
    //   //   },
    //   //   // {
    //   //   //   find: '@tanstack/start/router-manifest',
    //   //   //   replacement: path.resolve(
    //   //   //     import.meta.dirname,
    //   //   //     './node_modules/@tanstack/start/dist/esm/router-manifest',
    //   //   //   ),
    //   //   // },
    //   //   {
    //   //     find: 'npm:@tanstack/start',
    //   //     replacement: path.resolve(
    //   //       import.meta.dirname,
    //   //       './node_modules/@tanstack/start',
    //   //     ),
    //   //   },
    //   //   // {
    //   //   //   find: '@tanstack/start',
    //   //   //   replacement: path.resolve(
    //   //   //     import.meta.dirname,
    //   //   //     './node_modules/@tanstack/start',
    //   //   //   ),
    //   //   // },
    //   //   {
    //   //     find: 'npm:@tanstack/react-router',
    //   //     replacement: path.resolve(
    //   //       import.meta.dirname,
    //   //       './node_modules/@tanstack/react-router',
    //   //     ),
    //   //   },
    //   //   // {
    //   //   //   find: '@tanstack/react-router',
    //   //   //   replacement: path.resolve(
    //   //   //     import.meta.dirname,
    //   //   //     './node_modules/@tanstack/react-router',
    //   //   //   ),
    //   //   // },
    //   //   // {
    //   //   //     find: "npm:@tanstack/start/router-manife",
    //   //   //     replacement: path.resolve(
    //   //   //         import.meta.dirname,
    //   //   //         "./node_modules/@tanstack/start/dist/esm/server",
    //   //   //     ),
    //   //   // },
    //   // ],
    // },
  },
});
