import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from 'unplugin-icons/resolver';
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import tauri from "vite-plugin-tauri";
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    tauri(),
    Components({
      dirs: ["src/components", "src/pages/modules", "src/pages"], // Ensure paths are correct
      extensions: ["vue"],
      deep: true,
      dts: "src/lib/components.d.ts",
      resolvers: [
        IconsResolver({
          prefix: "i",
        })
      ],
    }),
    AutoImport({
      imports: [VueRouterAutoImports, "vue"],
      dirs: ["src/service/"],
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
    Icons({ 
      autoInstall: true,
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
