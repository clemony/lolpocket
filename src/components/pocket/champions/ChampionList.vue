<script setup lang="ts">
import { clean } from '@lib/utils'

import { useChampStore } from '@/stores/champStore'
import { VueDraggable } from 'vue-draggable-plus'
import { useDataStore } from '@/stores/dataStore'
import type { pocket } from 'types'

const ds = useDataStore()
const cs = useChampStore()

const props = defineProps<{
    pocket: pocket
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

    if (cs.champSearch) {
        filtered = filtered.filter((champion) =>
            Object.values(champion).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(cs.champSearch)
            )
        )
    }
    // Apply cat filters if any
    if (cs.classFilters.length) {
        filtered = filtered.filter((champion) =>
            cs.classFilters.some((filter) =>
                champion.tags
                    ?.toString()
                    .toLowerCase()
                    .includes(filter.toLowerCase())
            )
        )
    }

    if (cs.sortAZ) {
        if (cs.sortAZ === 'az') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (cs.sortAZ === 'za') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (cs.viewFavorite == true && cs.favoriteChamps.length) {
        filtered = filtered.filter((champion) =>
            cs.favoriteChamps.some(
                (favoriteChampion) => favoriteChampion.name === champion.name
            )
        )
    }
    return filtered
})

watch(
    () => cs.favoriteChamps, // Watch the actual value of favoriteChampions
    (newVal) => {
        if (!newVal.length) {
            cs.viewFavorite = false
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
        class="drag-draggable max-h-inherit h-inherit items-start justify-around overflow-y-auto rounded-lg pb-4 pr-10 pt-4 scrollbar-hide"
        @start="console.log($event)">
        <TransitionGroup name="pop">
            <div
                v-for="champion in filteredChampions"
                :key="champion.name"
                ref="list"
                class="size-22">
                <label
                    class="drag-label"
                    dragClass="setDrag"
                    @click.right.prevent="">
                    <div
                        class="drag-wrapper border-accent/50! shadow-standard!">
                        <input
                            type="radio"
                            :value="champion"
                            v-model="cs.selectedChampion"
                            class="peer hidden" />
                        <LoadImg
                            :url="`/img/champions/${clean(champion.name)}.webp`"
                            class="load-img drag-img scale-[108%]"
                            draggable="false" />
                    </div>
                </label>
            </div>
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
