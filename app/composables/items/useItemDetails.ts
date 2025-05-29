// ~/composables/useItemDetails.ts
export function useItemDetails(id: number) {
  return useFetch<Item>(`/api/items/${id}`, {
    key: `item-${id}`,
    lazy: false,
    server: false, // assume it's triggered by user interaction
  })
}