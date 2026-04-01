import type { FuseOptionKey, IFuseOptions } from 'fuse.js'
import Fuse from 'fuse.js'

export type FuseLogicalOperator = '$and' | '$or'
export function useSearch<T>(
  source: T[] | Ref<T[] | null | undefined>,
  query: Ref<string>,
  opt?: {
    options?: IFuseOptions<T>
    keys?: FuseOptionKey<T>[]
  }
) {
  const fuse = ref<Fuse<T> | null>(null)

  watch(
    () => unref(source),
    (val) => {
      const collection = Array.isArray(val) ? val : []
      fuse.value = new Fuse(collection, {
        keys: opt?.keys,
        ...opt?.options,
        threshold: 0.3,
      })
    },
    { deep: true, immediate: true }
  )

  const results = computed(() => {
    const res = fuse.value?.search(query.value) ?? []

    return res.map(r => r.item)
  })

  return results
}

export function useMatchedSearch<T>(
  source: T[] | Ref<T[] | null | undefined>,
  query: Ref<string>,
  opt?: {
    options?: IFuseOptions<T>
    keys?: FuseOptionKey<T>[]
  }
) {
  const fuse = ref<Fuse<T> | null>(null)

  watch(
    () => unref(source),
    (val) => {
      const collection = Array.isArray(val) ? val : []
      fuse.value = new Fuse(collection, {
        keys: opt?.keys,
        ...opt?.options,

        includeMatches: true,
        threshold: 0.3,
      })
    },
    { deep: true, immediate: true }
  )

  const results = computed(() => {
    const res = fuse.value?.search(query.value) ?? []
    console.log('🥸 - useSearch - res:', res)

    return res.reverse()
  })

  return results
}

export function useLogicalSearch<T>(
  source: T[] | Ref<T[] | null | undefined>,
  query: Ref<string>,
  opt?: {
    options?: IFuseOptions<T>
    keys?: FuseOptionKey<T>[]
  }
) {
  const fuse = ref<Fuse<T> | null>(null)

  watch(
    () => unref(source),
    (val) => {
      const collection = Array.isArray(val) ? val : []
      fuse.value = new Fuse(collection, {
        keys: opt?.keys,
        ...opt?.options,
        threshold: 0.3,
      })
    },
    { deep: true, immediate: true }
  )

  const results = computed(() => {
    const res = fuse.value?.search(query.value) ?? []
    console.log('🥸 - useSearch - res:', res)

    return res.reverse()
  })

  return results
}
