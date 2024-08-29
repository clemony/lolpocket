import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from 'unplugin-icons/resolver';
import Components from "unplugin-vue-components/vite";
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";


export default defineConfig({
  plugins: [
    VueRouter({
       // what files should be considered as a pages
  extensions: ['.vue'],
  dts: './typed-router.d.ts',

 } ),
    vue(),
    Components({
      dirs: ["src/pages/modules", "src/pages"], // Ensure paths are correct
      extensions: ["vue"],
      deep: true,
      dts: "./components.d.ts",
      resolvers: [
        IconsResolver(),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        VueRouterAutoImports, 

      ],
      dirs: [
        '@stores/', 
        '@lib/', 
        // ...
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },

      vueTemplate: true,
      viteOptimizeDeps: true,
      
      dts: "./auto-imports.d.ts", // Generates `auto-imports.d.ts` file
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

  build: {
    rollupOptions: {
      input: {
        main: 'src/main.ts', // Adjust to your entry file
        // Add additional entry points if needed
      },
    },
  },
});
