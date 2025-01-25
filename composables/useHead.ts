export function useHeader() {
  return useHead({
    title: 'lolpocket',
    meta: [{ name: 'pockets', content: 'for all' }],
    bodyAttrs: {
      class: 'test',
    },
    htmlAttrs: {},
    script: [{}],
  })
}
