export function useHeader() {
  return useHead({
    title: 'lolpocket',
    meta: [{ name: 'pockets', content: 'lp up' }],
    bodyAttrs: {
      class: 'test',

    },
    htmlAttrs: {},
    script: [{}],
  })
}
