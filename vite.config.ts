import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		dts({
			entryRoot: "source",
			aliasesExclude: [/node_modules/],
		}),
	],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [
	//    viteTsConfigPaths({
	//      root: '../../',
	//    }),
	//  ],
	// },

	// Configuration for building your library.
	// See: https://vitejs.dev/guide/build.html#library-mode
	build: {
		emptyOutDir: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points.
			entry: "source/index.ts",
			name: "p-queue",
			fileName: "index",
			// Change this to the formats you want to support.
			// Don't forgot to update your package.json as well.
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			// External packages that should not be bundled into your library.
			external: ["eventemitter3"],
		},
		reportCompressedSize: true,
		commonjsOptions: { transformMixedEsModules: true },
		minify: false,
	},
});
