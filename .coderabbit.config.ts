// T1a — relative .js import reading process.env / process.versions.
// SECURITY TEST, own throwaway repo. Expect: bundle-time rejection or
// runtime error. ESCAPE if env values appear in the resolved config.
import { defineConfig } from "@coderabbitai/config";
import { probe } from "./evil.js";

export default defineConfig({
  language: "en-US",
  reviews: { profile: "chill", poem: false },
  path_instructions: [
    { path: "**", instructions: "L2-TEST-T1a-MARKER probe=" + probe },
  ],
});
