<script setup lang="ts">
import { clean } from '@lib/utils'

import { useChampStore } from '@/stores/champStore'
import { VueDraggable } from 'vue-draggable-plus'
import { usePocketStore } from '@/stores/pocketStore'
import { useDataStore } from '@/stores/dataStore'
import { getPocket } from '@utils/pocketUtilities'

const ds = useDataStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = computed(() => {
    return getPocket(props.pocketKey)
})

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
    return filtered
})

// Sorting logic
const sfc = computed(() => {
    let sorted = ref([...filteredChampions.value]) // Use ref instead of reactive

    if (cs.sortAZ) {
        if (cs.sortAZ === 'az') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (cs.sortAZ === 'za') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (cs.viewFavorite == true && cs.favoriteChamps.length) {
        sorted.value = sorted.value.filter((champion) =>
            cs.favoriteChamps.some(
                (favoriteChampion) => favoriteChampion.name === champion.name
            )
        )
    }

    return sorted.value
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
        v-model="sfc"
        ghostClass="ghosty"
        :delay="0"
        :animation="300"
        :force-fallback="true"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        class="drag-draggable max-h-inherit h-inherit items-start justify-around overflow-y-auto rounded-lg pb-4 pr-10 pt-4 scrollbar-hide">
        <div class="h-12 w-full"></div>

        <TransitionGroup name="pop">
            <div
                v-for="(champion, index) in sfc"
                :key="champion.name"
                ref="list"
                class="size-[68px]">
                <label
                    class="drag-label"
                    dragClass="setDrag"
                    @click.right.prevent="">
                    <div class="drag-wrapper !border-neutral/40">
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
