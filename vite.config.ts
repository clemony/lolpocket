import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import path from 'node:path';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { ViteAliases } from 'vite-aliases';
import { promises as fs } from 'node:fs';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import vueDevTools from 'vite-plugin-vue-devtools';
import Inspector from 'unplugin-vue-inspector/vite';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
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
      depth: 1,
      createLog: true,
      logPath: 'src/logs',
    }),
    Components({
      dirs: ['src/pages', 'splitpanes', '@iconify/vue'], // Ensure paths are correct
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
    [
      visualizer({
        filename: './dist/stats.html',
        open: true,
      }) as PluginOption,
    ],
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
