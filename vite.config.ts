import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tauri from "vite-plugin-tauri";
import "@/assets/index.ts";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ViteAliases } from "vite-aliases";
import IconsResolver from 'unplugin-icons/resolver';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    tauri(),
    Components({
      dirs: ["src/components", "src/components/ui"], // Ensure paths are correct
      extensions: ["vue"],
      deep: true,
      dts: "src/components.d.ts",
      resolvers: [
        IconsResolver(),
      ],
    }),
    AutoImport({
      imports: [VueRouterAutoImports, "vue"],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
      dts: "src/lib/auto-imports.d.ts", // Generates `auto-imports.d.ts` file
    }),
    ViteAliases({
      prefix: "@",
      deep: true,
      depth: 2,
      createLog: true,
      logPath: "src/logs",
      createGlobalAlias: true,
    }),
  ],

  clearScreen: false,

  server: {
    port: 8080,
    open: false,
  },

  envPrefix: ["VITE_", "TAURI_PLATFORM", "TAURI_ARCH", "TAURI_FAMILY", "TAURI_PLATFORM_VERSION", "TAURI_PLATFORM_TYPE", "TAURI_DEBUG"],

  build: {
    rollupOptions: {
      input: {
        main: 'src/main.ts', // Adjust to your entry file
        // Add additional entry points if needed
      },
    },
    target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
