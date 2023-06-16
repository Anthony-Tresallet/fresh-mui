/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import { applyManifestLayouts } from "$fresh_layout/mod.ts";
import manifest from "./fresh.gen.ts";


await start(applyManifestLayouts(manifest));
