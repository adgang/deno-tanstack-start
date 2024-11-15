// app.config.ts
import { pluginDeno } from "@deno-plc/vite-plugin-deno";
// import viteDeno from "https://deno.land/x/vite_deno_plugin/mod.ts";

import react from "npm:@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

import { defineConfig } from "npm:@tanstack/start/config";

export default defineConfig({
    vite: {
        plugins: [
            // viteDeno(),
            pluginDeno({
                // see configuration docs
            }),
            react(),
            deno(),
        ],
    },
});
