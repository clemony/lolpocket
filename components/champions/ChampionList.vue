<script setup lang="ts">
import { categories } from 'shared/data/champion/championCategories'

const as = useAccountStore()

const ds = useDataStore()
const ts = useTempStore()
ts.selectedChampion = ref()
const filteredChampions = computed(() => {
  let filtered = [...ds.champions]
  const includedChampions = new Set()

  if (ts.filterChampionClass && ts.filterChampionClass.length > 0) {
    filtered = filtered.filter((champion) => {
      return ts.filterChampionClass.some((className) => {
        const category = categories.value.find(cat => cat.id === className)
        if (category?.champions.includes(champion.name)) {
          if (!includedChampions.has(champion.name)) {
            includedChampions.add(champion.name)
            return true
          }
        }
        return false
      })
    })
  }

  /*    if (ts.filterChampionTypes && ts.filterChampionTypes !== 'Favorites') {
        filtered = filtered.filter(
            (champion) =>
                champion.external_positions.toLowerCase() ==
                ts.filterChampionTypes
        )
    } */

  if (ts.filterChampionTypes && ts.filterChampionTypes === 'Favorites') {
    filtered = filtered.filter(champion => as.favoriteChamps.includes(champion))
  }

  if (ts.sortChampsAZ) {
    if (ts.sortChampsAZ === 'az') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (ts.sortChampsAZ === 'za') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
    }
  }

  if (ts.filterFavoriteChamps === true && as.favoriteChamps.length > 0) {
    filtered = filtered.filter(champion => as.favoriteChamps.some(favoriteChampion => favoriteChampion.name === champion.name))
  }

  return filtered
})

console.log('💠 - filteredChampions - filteredChampions:', filteredChampions)
</script>

<template>
  <transition-slide
    group
    class="max-h-full user-select-none champions-start grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4 overflow-auto px-3 rounded-lg pb-8"
  >
    <ChampionSplash
      v-for="champion in filteredChampions"
      :key="champion.id"
      :champion="champion"
      class="champion w-full"
      drag-class="setDrag"
      @click.right.prevent
      @click="ts.selectedChampion = champion"
    />
  </transition-slide>
</template>

<style scoped></style>
