import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import vueDevTools from 'vite-plugin-vue-devtools'
import Inspector from 'unplugin-vue-inspector/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, type PluginOption } from 'vite'

import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        Inspector(),
        Components({
            dirs: [
                'src/pages',
                '@iconify/vue',
                'src/components',
                'src/components/ui',
                'src/utils',
            ], // Ensure paths are correct
            extensions: ['vue'],
            deep: true,
            dts: './components.d.ts',
            resolvers: [
                IconsResolver({
                    prefix: false,
                    enabledCollections: ['ui'],
                    customCollections: ['ui'],
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
                    '/src/lib/utils.ts': ['cn', 'clean'],
                },
            ],

            dirs: [],
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
            },

            vueTemplate: true,
            viteOptimizeDeps: true,
            injectAtEnd: true,

            dts: true, // Generates `auto-imports.d.ts` file
        }),

        Icons({
            customCollections: {
                ui: FileSystemIconLoader('public/img/icons', (svg) =>
                    svg.replace(
                        /^<svg /,
                        '<svg fill="currentColor" stroke="currentColor" '
                    )
                ),
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
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/assets'),
            '@data': resolve(__dirname, 'src/data'),
            '@lib': resolve(__dirname, 'src/lib'),
            '@logs': resolve(__dirname, 'src/logs'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@script': resolve(__dirname, 'src/script'),
            '@stores': resolve(__dirname, 'src/stores'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@': resolve(__dirname, 'src'),
            '@config': resolve(__dirname, 'src/config'),
            '@css': resolve(__dirname, 'src/css'),
        },
    },
    envPrefix: ['VITE_', 'TAURI_ENV_*'],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html', // Adjust to your entry file
            },
        },
        target:
            process.env.TAURI_ENV_PLATFORM == 'windows' ?
                'chrome105'
            :   'safari13',
        // don't minify for debug builds
        minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_ENV_DEBUG,
    },
})
