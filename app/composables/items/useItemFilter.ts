// useItemFilter.ts
const ItemFilterKey = Symbol('ItemFilter')

export function useItemFilter() {
  const state = inject(ItemFilterKey, null)
  if (!state) {
    throw new Error(
      'useItemFilter must be used within a useItemFilterProvider()'
    )
  }
  return state
}
