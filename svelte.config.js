import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { enhancedImages } from "mdsvex-enhanced-images";
import { mdsvex } from "mdsvex";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    mdsvex({
      extensions: [".svx"],
      layout: join(__dirname, "./src/lib/yap/_layout.svelte"),
      remarkPlugins: [enhancedImages],
    }),
    vitePreprocess(),
  ],
  compilerOptions: {
    // Force runes mode for the project, except for libraries and svx for mdsvex. Can be removed in svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") || filename.split(".").includes("svx")
        ? undefined
        : true,
  },
  kit: {
    // use static adapter instead of auto
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx"],
};

export default config;
