<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
import { useTempStore } from '@stores/tempStore'
import { useDataStore } from '@stores/dataStore'
import { championDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@/functions/utils'
import { types } from './data/championRoles'
import { categories } from './data/championClasses'
import { Category } from '@/types/utilityTypes'

const ds = useDataStore()
const ts = useTempStore()

const filteredChampions = computed(() => {
    let filtered = [...ds.champions]
    const includedChampions = new Set()

    if (ts.browseChampionClass && ts.browseChampionClass.length > 0) {
        filtered = filtered.filter((champion) => {
            return ts.browseChampionClass.some((className) => {
                const category = categories.value.find(
                    (cat) => cat.id === className
                )
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

    if (ts.sortChampsAZ) {
        if (ts.sortBrowseChampsAZ === 'az') {
            filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        } else if (ts.sortBrowseChampsAZ === 'za') {
            filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
        }
    }

    if (ts.browseFavoriteChamps === true && as.favoriteChamps.length > 0) {
        filtered = filtered.filter((champion) =>
            as.favoriteChamps.some(
                (favoriteChampion) => favoriteChampion.name === champion.name
            )
        )
    }
    transitionKey.value++
    return filtered
})

const transitionKey = ref(0)
const debounceArray = refDebounced(filteredChampions, 200)

console.log('💠 - filteredChampions - filteredChampions:', filteredChampions)
</script>

<template>
    <div
        class="max-h-inherit h-inherit scrollbar-hide flex flex-wrap items-start justify-around gap-4 overflow-y-auto rounded-lg pt-4 pb-4">
        <TransitionGroup
            enter-active-class="transition-opacity duration-700"
            move-class="transition-all duration-700"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-700 absolute"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            :key="transitionKey">
            <Champion
                v-for="champion in debounceArray"
                :key="champion.id"
                :champion="champion"
                class="champion animate-in size-20 shrink-0 overflow-hidden rounded-lg"
                dragClass="setDrag"
                @click="toggleDrawerState(championDrawer, null, champion)" />
        </TransitionGroup>
        <div v-for="i in 10" class="aspect-square size-20"></div>
    </div>
</template>

<style scoped></style>
