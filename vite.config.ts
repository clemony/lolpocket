import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
//import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { resolve } from 'path'
import RadixVueResolver from 'radix-vue/resolver'
import OkuMotionResolver from '@oku-ui/motion/resolver'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        // nodePolyfills(),
        Components({
            dirs: [
                'src/client/pages',
                '@iconify/vue',
                'src/client/components',
                'src/client/components/ui',
                'src/client/utils',
            ], // Ensure paths are correct
            extensions: ['vue'],
            deep: true,
            dts: './src/client/components.d.ts',
            resolvers: [
                RadixVueResolver(),
                OkuMotionResolver(),
                IconsResolver({
                    prefix: false,
                    enabledCollections: ['ui', 'logo'],
                    customCollections: ['ui', 'logo'],
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
                '@vueuse/core',
                '@vueuse/head',
                'vue-i18n',
                'vue-router',
                {
                    '@/client/lib/utils.ts': ['cn', 'clean'],
                },
            ],

            dirs: [],
            eslintrc: {
                enabled: true,
                filepath: './src/client/.eslintrc-auto-import.json',
            },

            vueTemplate: true,
            viteOptimizeDeps: true,
            injectAtEnd: true,

            dts: './src/client/auto-imports.d.ts', // Generates `auto-imports.d.ts` file
        }),

        Icons({
            customCollections: {
                ui: FileSystemIconLoader('public/img/icons', (svg) =>
                    svg.replace(
                        /^<svg /,
                        '<svg fill="currentColor" stroke="currentColor" '
                    )
                ),
                logo: FileSystemIconLoader('public/img/logos', (svg) =>
                    svg.replace(
                        /^<svg /,
                        '<svg fill="currentColor" stroke="currentColor" '
                    )
                ),
            },
        }),
    ],
    clearScreen: false,

    server: {
        port: 8080,
        open: '/',
    },
    resolve: {
        alias: {
            '@assets': resolve(__dirname, '/src/client/assets'),
            '@components': resolve(__dirname, 'src/client/components'),
            '@data': resolve(__dirname, '/src/client/data'),
            '@lib': resolve(__dirname, '/src/client/lib'),
            '@pages': resolve(__dirname, '/src/client/pages'),
            '@script': resolve(__dirname, '/src/client/script'),
            '@stores': resolve(__dirname, '/src/client/stores'),
            '@utils': resolve(__dirname, '/src/client/utils'),
            '@': resolve(__dirname, 'src'),
            '@config': resolve(__dirname, '/src/client/config'),
            '@css': resolve(__dirname, '/src/client/css'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html', // Adjust to your entry file
            },
        },
        /* , 'TAURI_ENV_*        target:
            process.env.TAURI_ENV_PLATFORM == 'windows' ?
                'chrome105'
            :   'safari13',
        // don't minify for debug builds
        minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_ENV_DEBUG, */
    },
})
