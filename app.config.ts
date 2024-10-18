// app.config.ts
import { pluginDeno } from "@deno-plc/vite-plugin-deno";

import { defineConfig } from "npm:@tanstack/start/config";

export default defineConfig({
    plugins: [
        pluginDeno({
            // see configuration docs
        }),
    ],
});
