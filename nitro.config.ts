//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: 'server',
    compatibilityDate: '2024-12-26',
    runtimeConfig: {
        apiToken: 'dev_token', // `dev_token` is the default value
    },
    preset: 'cloudflare_pages',
    experimental: {
        database: true,
    },
})
