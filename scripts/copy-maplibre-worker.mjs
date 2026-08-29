// Turbopack (Next.js dev/build) doesn't correctly serve maplibre-gl's
// internal Web Worker chunk (loaded via `new URL(..., import.meta.url)`
// inside the package). Copying it into /public lets us load it from a
// stable same-origin path instead via `setWorkerUrl` in location-map.tsx.
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, "node_modules/maplibre-gl/dist");
const publicDir = path.join(rootDir, "public");

// maplibre-gl-worker.mjs imports maplibre-gl-shared.mjs via a relative
// specifier, so both files must live side by side at the public root.
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  copyFileSync(path.join(distDir, file), path.join(publicDir, file));
}
console.log("Copied maplibre-gl worker files to /public");
