// T0 BASELINE (control) — L2 security test, own throwaway repo.
// Proves the harness + the @coderabbitai configuration oracle work.
import { defineConfig } from "@coderabbitai/config";

export default defineConfig({
  language: "en-US",
  reviews: {
    profile: "chill",
    poem: false,
  },
  path_instructions: [
    { path: "**", instructions: "L2-TEST-T0-BASELINE-MARKER" },
  ],
});
