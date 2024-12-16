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
import OkuMotionResolver from '@oku-ui/motion/resolver'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        Components({
            dirs: [
                './src/pages',
                '@iconify/vue',
                './src/components',
                './src/components/base',
                './src/utils',
            ], // Ensure paths are correct
            extensions: ['vue'],
            deep: true,
            dts: './components.d.ts',
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
                    '@/lib/utils.ts': ['cn', 'clean'],
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        open: true,
=======
        open: false,
>>>>>>> 12d6db59 (update 38 files and delete 54 files)
=======
        open: true,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
        open: true,
=======
        open: false,
>>>>>>> fcc65b9c (update 38 files and delete 54 files)
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
        open: true,
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
        open: true,
=======
        open: false,
>>>>>>> fcc65b9c (update 38 files and delete 54 files)
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
        open: true,
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
    },
    resolve: {
        alias: {
            '@assets': resolve(__dirname, '/src/assets'),
            '@/assets': resolve(__dirname, '/src/assets'),
            '@/components': resolve(__dirname, 'src/components'),
            '@components': resolve(__dirname, 'src/components'),
            '@base': resolve(__dirname, 'src/components/base'),
            '@data': resolve(__dirname, '/src/data'),
            '@lib': resolve(__dirname, '/src/lib'),
            '@pages': resolve(__dirname, '/src/pages'),
            '@/pages': resolve(__dirname, '/src/pages'),
            '@script': resolve(__dirname, '/src/script'),
            '@stores': resolve(__dirname, '/src/stores'),
            '@utils': resolve(__dirname, '/src/utils/'),
            '@': resolve(__dirname, 'src'),
            '@client': resolve(__dirname, '/src/'),
            '@config': resolve(__dirname, '/src/config'),
            '@css': resolve(__dirname, '/src/css'),
        },
    },
    build: {
        rollupOptions: {
            input: 'index.html',
        },
    },
})
