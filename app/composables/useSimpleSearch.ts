import type { IFuseOptions } from 'fuse.js'
import Fuse from 'fuse.js'

export function useSimpleSearch<T>(
  source: T[] | Ref<T[]>,
  query: Ref<string>,
  options?: IFuseOptions<T>,
  keys?: string[]
) {
  const fuse = ref<Fuse<T> | null>(null)

  watch(
    () => unref(source),
    (val) => {
      fuse.value = new Fuse(val, { keys: [keys || '', 'name'], threshold: 0.3 })
    },
    { immediate: true, deep: true }
  )

  const results = computed<T[]>(() => {
    const list = unref(source) // always unwrap to T[]
    if (!query.value.trim())
      return list
    return fuse.value?.search(query.value).map(r => r.item) ?? []
  })

  return { results }
}
