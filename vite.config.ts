import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
<<<<<<< HEAD
import Components from "unplugin-vue-components/vite";
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";

=======
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import { promises as fs } from 'node:fs';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
>>>>>>> 0d8a5d3 (fix?)

export default defineConfig({
  plugins: [
    VueRouter({
<<<<<<< HEAD
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
=======
      // what files should be considered as a pages
      extensions: ['.vue'],
      dts: './typed-router.d.ts',
    }),
    vue(),
    Components({
      dirs: ['src/pages/champions', 'src/pages', 'splitpanes', '@iconify/vue'], // Ensure paths are correct
      extensions: ['vue'],
      deep: true,
      dts: './components.d.ts',
      resolvers: [
        IconsResolver({
          enabledCollections: ['ui-icons'],
          customCollections: ['ui-icons'],
        }),
>>>>>>> 0d8a5d3 (fix?)
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
<<<<<<< HEAD
      imports: [
        'vue',
        VueRouterAutoImports, 

      ],
      dirs: [
        '@stores/', 
        '@lib/', 
=======
      imports: ['vue', VueRouterAutoImports],
      dirs: [
        '@iconify/vue',
        './src/utils',
        './src/stores',
>>>>>>> 0d8a5d3 (fix?)
        // ...
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },

      vueTemplate: true,
      viteOptimizeDeps: true,
<<<<<<< HEAD
      
      dts: "./auto-imports.d.ts", // Generates `auto-imports.d.ts` file
=======

      dts: './auto-imports.d.ts', // Generates `auto-imports.d.ts` file
>>>>>>> 0d8a5d3 (fix?)
    }),
    ViteAliases({
      prefix: '@',
      deep: true,
      depth: 3,
      createLog: true,
      logPath: 'src/logs',
      createGlobalAlias: true,
    }),
<<<<<<< HEAD
    
=======
    Icons({
      customCollections: {
        'ui-icons': FileSystemIconLoader('./src/assets/img', (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" stroke="currentColor" ')),
      },
    }),
>>>>>>> 0d8a5d3 (fix?)
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
