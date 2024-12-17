<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
import { useTempStore } from '@stores/tempStore'
=======
import { clean } from '@lib/utils'

import { useChampStore } from '@stores/champStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
import { useTempStore } from '@stores/tempStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
import { VueDraggable } from 'vue-draggable-plus'
import { useDataStore } from '@stores/dataStore'
import type { pocket } from 'types'

const ds = useDataStore()
const ts = useTempStore()

const props = defineProps<{
    pocket?: pocket
}>()

const pocket = ref(props.pocket)

const champions = computed(() => {
    if (pocket.value) {
        return pocket.value.champions[0].champions
    }
})

const filteredChampions = computed(() => {
    let filtered = ds.champions

    if (champions.value) {
        const selectedNames = champions.value.map((champion) => champion.name)

        filtered = filtered.filter(
            (champion) => !selectedNames.includes(champion.name)
        )
    }

    if (ts.champSearch) {
        filtered = filtered.filter((champion) =>
            Object.values(champion).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(ts.champSearch)
            )
        )
    }
    // Apply cat filters if any
    if (ts.champClassFilters.length) {
        filtered = filtered.filter((champion) =>
            ts.champClassFilters.some((filter) =>
                champion.tags
                    ?.toString()
                    .toLowerCase()
                    .includes(filter.toLowerCase())
            )
        )
    }

    if (ts.sortChampsAZ) {
        if (ts.sortChampsAZ === 'az') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (ts.sortChampsAZ === 'za') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (ts.viewFavoriteChamps == true && as.favoriteChamps.length) {
        filtered = filtered.filter((champion) =>
            as.favoriteChamps.some(
                (favoriteChampion) => favoriteChampion.name === champion.name
            )
        )
    }
    return filtered
})

watch(
    () => as.favoriteChamps, // Watch the actual value of favoriteChampions
    (newVal) => {
        if (!newVal.length) {
            ts.viewFavoriteChamps = false
        }
    },
    { immediate: true } // Ensure it runs on initialization
)
</script>

<template>
    <VueDraggable
        ref="el"
        :group="{
            name: 'champs',
            pull: 'clone',
            put: false,
            revertClone: true,
        }"
        :sort="false"
        v-model="filteredChampions"
        ghostClass="ghosty"
        :delay="0"
        :animation="300"
        :force-fallback="true"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        class="max-h-inherit h-inherit scrollbar-hide flex flex-wrap items-start justify-around gap-4 overflow-y-auto rounded-lg pt-4 pb-4"
        @start="console.log($event)">
        <TransitionGroup name="pop">
<<<<<<< HEAD
<<<<<<< HEAD:src/components/pocket/champions/ChampionList.vue
        
=======
            >
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/pocket/champions/ChampionList.vue
=======
        
>>>>>>> 404a531d (update 84 files and delete 4 files)
            <label
                v-for="champion in filteredChampions"
                :key="champion.name"
                ref="list"
                class="size-22 shrink-0 overflow-hidden rounded-lg"
                dragClass="setDrag"
                @click.right.prevent="">
                <input
                    type="radio"
                    :value="champion"
<<<<<<< HEAD
<<<<<<< HEAD:src/components/pocket/champions/ChampionList.vue
                    v-model="ts.selectedChampion"
=======
                    v-model="cs.selectedChampion"
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/pocket/champions/ChampionList.vue
=======
                    v-model="ts.selectedChampion"
>>>>>>> 404a531d (update 84 files and delete 4 files)
                    class="peer hidden" />
                <LoadImg
                    :url="`/img/champions/${clean(champion.name)}.webp`"
                    class="load-img drag-img scale-114"
                    draggable="false" />
            </label>
        </TransitionGroup>

        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
        <div class="aspect-square size-[68px]"></div>
    </VueDraggable>
</template>

<style scoped></style>
