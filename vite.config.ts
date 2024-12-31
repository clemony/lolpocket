import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import RadixVueResolver from 'radix-vue/resolver'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('hanko-'),
                },
            },
        }),
        vueDevTools(),
        tailwindcss(),
        Components({
            dirs: [
                './src/pages',
                '@iconify/vue',
                './src/components',
                './src/components/base',
                '.src/loading',
            ], // Ensure paths are correct
            extensions: ['vue'],
            deep: true,
            dts: './components.d.ts',
            resolvers: [
                RadixVueResolver(),
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
                    '@/lib/utils.ts': ['cn', 'clean'],
                    '@/functions/makeLinks.ts': [
                        'lolImgCdn',
                        'formatLink',
                        'getItemId',
                        'getItembyId',
                        'getItemImage',
                        'getWikiLink',
                    ],
                    '@/functions/getItem.ts': [],
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

            dts: './auto-imports.d.ts', // Generates `auto-imports.d.ts` file
        }),

        Icons({
            compiler: 'vue3',
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
    optimizeDeps: {
        include: ['tailwindcss', './src/components/*'],
    },
    clearScreen: false,

    server: {
        port: 8080,
        open: true,
    },
    resolve: {
        alias: {
            '@assets': resolve(__dirname, '/src/assets/'),
            '@components': resolve(__dirname, 'src/components/'),
            '@base': resolve(__dirname, 'src/components/base/'),
            '@data': resolve(__dirname, '/src/data/'),
            '@lib': resolve(__dirname, '/src/lib/'),
            '@pages': resolve(__dirname, '/src/pages/'),
            '@stores': resolve(__dirname, '/src/stores/'),
            '@functions': resolve(__dirname, '/src/functions/'),
            '@': resolve(__dirname, 'src/'),
            '@config': resolve(__dirname, '/src/config/'),
            '@css': resolve(__dirname, '/src/css/'),
            '@loading': resolve(__dirname, '/src/css/'),
            '@types': resolve(__dirname, '/src/css/'),
        },
    },
    build: {
        rollupOptions: {
            input: 'index.html',
        },
    },
    envDir: resolve(__dirname),
})
