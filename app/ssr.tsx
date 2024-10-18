/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from "npm:@tanstack/start/server";
import { getRouterManifest } from "npm:@tanstack/start/router-manifest";

import { createRouter } from "./router.tsx";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
