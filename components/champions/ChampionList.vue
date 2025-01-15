<script setup lang="ts">
  const as = useAccountStore()

  import { types } from 'shared/data/champion/championRoles'
  import { categories } from 'shared/data/champion/championCategories'

  const ds = useDataStore()
  const ts = useTempStore()

  const filteredChampions = computed(() => {
    let filtered = [...ds.champions]
    const includedChampions = new Set()

    if (ts.browseChampionClass && ts.browseChampionClass.length > 0) {
      filtered = filtered.filter((champion) => {
        return ts.browseChampionClass.some((className) => {
          const category = categories.value.find((cat) => cat.id === className)
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

    /*    if (ts.browseChampionTypes && ts.browseChampionTypes !== 'Favorites') {
        filtered = filtered.filter(
            (champion) =>
                champion.external_positions.toLowerCase() ==
                ts.browseChampionTypes
        )
    } */

    if (ts.browseChampionTypes && ts.browseChampionTypes === 'Favorites') {
      filtered = filtered.filter((champion) => as.favoriteChamps.includes(champion))
    }

    if (ts.sortChampsAZ) {
      if (ts.sortBrowseChampsAZ === 'az') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
      } else if (ts.sortBrowseChampsAZ === 'za') {
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
      }
    }

    if (ts.browseFavoriteChamps === true && as.favoriteChamps.length > 0) {
      filtered = filtered.filter((champion) => as.favoriteChamps.some((favoriteChampion) => favoriteChampion.name === champion.name))
    }

    return filtered
  })

  onMounted(() => {})
  console.log('💠 - filteredChampions - filteredChampions:', filteredChampions)
</script>

<template>
  <transition-slide
    group
    class="max-h-full user-select-none champions-start grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(170px,1fr))] justify-around gap-4 overflow-auto px-3 rounded-lg pb-8 h-fit">
    <ChampionSplash
      v-for="champion in filteredChampions"
      :key="champion.id"
      :champion="champion"
      class="champion w-full"
      dragClass="setDrag" />
  </transition-slide>
</template>

<style scoped></style>
