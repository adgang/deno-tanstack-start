// app.config.ts
import { pluginDeno } from "jsr:@deno-plc/vite-plugin-deno";
import viteDeno from "https://deno.land/x/vite_deno_plugin/mod.ts";

import react from "npm:@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

import { defineConfig } from "npm:@tanstack/start/config";
// import ssr from "npm:vite-plugin-ssr@^0.4.69/plugin";
import ssr from "npm:vike-react/plugin";
import path from "node:path";

export default defineConfig({
    tsr: {
        addExtensions: true,
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

            react(),
            // ssr(),
        ],
        resolve: {
            alias: [
                // {},
                {
                    find: "npm:@tanstack/start/server",
                    replacement: path.resolve(
                        import.meta.dirname,
                        "./node_modules/@tanstack/start/dist/esm/server",
                    ),
                },
                {
                    find: "npm:@tanstack/start/router-manifest",
                    replacement: path.resolve(
                        import.meta.dirname,
                        "./node_modules/@tanstack/start/dist/esm/router-manifest",
                    ),
                },
                {
                    find: "npm:@tanstack/start",
                    replacement: path.resolve(
                        import.meta.dirname,
                        "./node_modules/@tanstack/start",
                    ),
                },
                {
                    find: "npm:@tanstack/react-router",
                    replacement: path.resolve(
                        import.meta.dirname,
                        "./node_modules/@tanstack/react-router",
                    ),
                },
                // {
                //     find: "npm:@tanstack/start/router-manife",
                //     replacement: path.resolve(
                //         import.meta.dirname,
                //         "./node_modules/@tanstack/start/dist/esm/server",
                //     ),
                // },
            ],
        },
    },
});
