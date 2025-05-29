// ~/composables/useChampionDetails.ts
export function useChampionDetails(key: string) {
  return useFetch<Champion>(`/api/champions/${key}`, {
    key: `champion-${key}`,
    lazy: true,
    server: false,
  })
}