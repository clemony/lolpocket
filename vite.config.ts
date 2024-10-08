import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import { promises as fs } from 'node:fs';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import vueDevTools from 'vite-plugin-vue-devtools';
import Inspector from 'unplugin-vue-inspector/vite'; // OR vite-plugin-vue-inspector

export default defineConfig({
  plugins: [
    VueRouter({
      // what files should be considered as a pages
      extensions: ['.vue'],
      dts: './typed-router.d.ts',
    }),
    vue(),
    vueDevTools(),
    Inspector(),
    ViteAliases({
      prefix: '@',
      deep: true,
      depth: 2,
      createLog: true,
      logPath: 'src/logs',
      createGlobalAlias: true,
    }),
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
        {
          'vue3-toastify': ['toast', 'ToastContainerOptions'],
        },

        'pinia',
        { './stores/dataStore': ['useDataStore', 'ds'] },
      ],
      dirs: [
        // ...
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },

      vueTemplate: true,
      viteOptimizeDeps: true,
      injectAtEnd: true,

      dts: './auto-imports.d.ts', // Generates `auto-imports.d.ts` file
    }),

    Icons({
      customCollections: {
        'ui-icons': FileSystemIconLoader('./src/assets/img/icons', (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" stroke="currentColor" ')),
      },
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
