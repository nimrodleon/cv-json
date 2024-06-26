import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://nimrodleon.github.io",
    base: "/cv-json/",
    output: "static",
    outDir: "docs",
    build: {
        assets: "static",
    }
});
