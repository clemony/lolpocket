import Fuse from 'fuse.js'

export function useChampionSearch(champions: string[]) {
  const searchTerm = ref('')

  const fuse = new Fuse(champions, {
    threshold: 0.3,
    includeScore: false,
  })

  const filteredChampions = computed(() => {
    if (!searchTerm.value)
      return champions
    return fuse.search(searchTerm.value).map(result => result.item)
  })

  return {
    searchTerm,
    filteredChampions,
  }
}