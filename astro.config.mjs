import { defineConfig } from 'astro/config';
// import { createPages } from "@astro/build-utils";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'never',
	},
	// output: 'static',
	// compressHTML: false,

	server: {
		host: true,
		// open: "/one",
	},

	// vite: {
	// 	build: {
	// 		rollupOptions: {
	// 			output: {
	// 			entryFileNames: 'entry.[hash].mjs',
	// 			chunkFileNames: 'chunks/chunk.[hash].mjs',
	// 			assetFileNames: 'assets/asset.[hash][extname]',
	// 			},
	// 		},
	// 	},
	// },
});
