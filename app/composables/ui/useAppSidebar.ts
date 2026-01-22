// composables/useSidebar.ts

export const useAppSidebar = createSharedComposable(() => {
  const open = shallowRef(false)
  const toggle = (val?: boolean) => (open.value = val ?? !open.value)
  const close = () => (open.value = false)
  return { close, open, toggle }
})
