<script setup lang="ts">
import { categories } from 'shared/data/champion/championCategories'
import { types } from 'shared/data/champion/championRoles'

const as = useAccountStore()
const cs = useChampStore()
const ds = useDataStore()

cs.selectedChampion = ref()
const filteredChampions = computed(() => {
  let filtered = [...ds.champions]
  const includedChampions = new Set()

  if (cs.filterChampionClass && cs.filterChampionClass.length > 0) {
    filtered = filtered.filter((champion) => {
      return cs.filterChampionClass.some((className) => {
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

  /*    if (cs.filterChampionTypes && cs.filterChampionTypes !== 'Favorites') {
        filtered = filtered.filter(
            (champion) =>
                champion.external_positions.toLowerCase() ==
                cs.filterChampionTypes
        )
    } */

  if (cs.filterChampionTypes && cs.filterChampionTypes === 'Favorites') {
    filtered = filtered.filter(champion => as.favoriteChamps.includes(champion))
  }

  if (cs.sortChampsAZ) {
    if (cs.sortChampsAZ === 'az') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (cs.sortChampsAZ === 'za') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
    }
  }

  if (cs.filterFavoriteChamps === true && as.favoriteChamps.length > 0) {
    filtered = filtered.filter(champion => as.favoriteChamps.some(favoriteChampion => favoriteChampion.name === champion.name))
  }

  return filtered
})
/*
console.log('💠 - filteredChampions - filteredChampions:', filteredChampions) */

const a = Object.values(types)[3]
console.log('💠 - a:', a)

const b = computed(() => {
  const c = []
  a.forEach((type) => {
    c.push(type.id)
  })
  return c
})
console.log('💠 - b - b:', b.value)

watch(
  () => cs.filterChampionTypes,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div
    class=" user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-1 overflow-auto pr-10  pl-16  rounded-lg pb-8 pt-14">
    <LazyChampionFullPopover
      v-for="champion in filteredChampions"
      :key="champion.id"
      :champion="champion"
      class="champion w-full"
      drag-class="setDrag"
      hydrate-on-visible
      @click.right.prevent>
    </LazyChampionFullPopover>
  </div>

  <!-- <div as="div" class="h-full pt-34 w-full px-6">
    <div class=" flex flex-col  gap-6">
      <h2 class="mt-1">
        Roles
      </h2>

      <CheckboxFilterList
        :source="categories"
        @update:model="(e) => (cs.filterChampionClass = e)" />

      <h2 class="mt-6">
        Positions
      </h2>

      <RadioFilterList
        bg
        :types="b"
        class=""
        @update:model="(e) => (cs.filterChampionTypes = e)" />
    </div>
  </div> -->
</template>

<style scoped></style>
