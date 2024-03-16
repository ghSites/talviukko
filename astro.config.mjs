import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

export default defineConfig({
  build: {
    inlineStylesheets: 'never'
  },
  // output: 'static',
  compressHTML: false,

  server: {
    host: true,
//    open: "/programs",
  },

  markdown: {
    drafts: true,
  },

  integrations: [mdx()]
});
