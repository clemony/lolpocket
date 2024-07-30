import VueRouter from 'unplugin-vue-router/vite'

VueRouter({
  // how and what folders to scan for files
  routesFolder: [
    {
      src: 'src/pages',
      path: '',
      // override globals
      exclude: (excluded) => excluded,
      filePatterns: (filePatterns) => filePatterns,
      extensions: (extensions) => extensions,
    },
  ],

  // what files should be considered as a pages
  extensions: ['.vue'],

  // what files to include
  filePatterns: ['**/*'],

  // files to exclude from the scan
  exclude: [],

  // where to generate the types
  dts: 'src/lib/typed-router.d.ts',

  // how to generate the route name
  getRouteName: (routeNode) => getFileBasedRouteName(routeNode),

  // default language for <route> custom blocks
  routeBlockLang: 'json5',

  // how to import routes. can also be a string
  importMode: 'async',

  // where are paths relative to
  root: process.cwd(),

  // options for the path parser
  pathParser: {
    // should `users.[id]` be parsed as `users/:id`?
    dotNesting: true,
  },

  // modify routes individually
  async extendRoute(route) {
    if (route.name === '/main/main') {
        route.addAlias('/')
        }
  },

  // modify routes before writing
  async beforeWriteFiles(rootRoute) {
    // ...
  },
})