import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lasercrafts.cl",
  trailingSlash: "never",
  outDir: "../../docs",
  build: {
    format: "directory"
  }
});
