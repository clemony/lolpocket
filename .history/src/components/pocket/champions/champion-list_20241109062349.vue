<script setup lang="ts">
import { clean } from '@lib/utils'

import { useChampStore } from '@stores/champStore'
import { VueDraggable } from 'vue-draggable-plus'
import { usePocketStore } from '@stores/pocketStore'
import { useDataStore } from '@stores/dataStore'
import LoadBasis from '../../load/load-basis.vue'


const Champion = defineAsyncComponent({
    loader: () => import('./champion.vue'),

    loadingComponent: LoadBasis,
    delay: 200,
})

const ds = useDataStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = computed(() => {
    return ps.getPocket(props.pocketKey)
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
                champion.tags?.toString().toLowerCase().includes(filter.toLowerCase())
            )
        )
    }
    return filtered
})

// Sorting logic
const sfc = computed(() => {
    let sorted = ref([...filteredChampions.value]) // Use ref instead of reactive

    if (cs.sortName) {
        if (cs.sortName === 'az') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (cs.sortName === 'za') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }


    if (cs.viewLoved == true && cs.lovedChamps.length) {
        sorted.value = sorted.value.filter((champion) =>
            cs.lovedChamps.some((lovedChampion) => lovedChampion.name === champion.name
            )
        )
    }

    return sorted.value
})

watch(
    () => cs.lovedChamps, // Watch the actual value of lovedChampions
    (newVal) => {
        if (!newVal.length) {
            cs.viewLoved = false
        }
    },
    { immediate: true } // Ensure it runs on initialization
)
</script>

<template>
<VueDraggable ref="el" :group="{
    name: 'champs',
    pull: 'clone',
    put: false,
    revertClone: true,
}" :sort="false" v-model="filteredChampions" ghostClass="ghosty" :delay="0" :animation="300" :force-fallback="true"
    :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
    class="drag-draggable rounded-lg items-start justify-around h-inherit px-2 pb-4 pt-4 overflow-y-scroll scrollbar-hide">


    <TransitionGroup name="pop">
        <div v-for="(champion, index) in filteredChampions" :key="champion.name" ref="list" class="size-[68px]">


            <label class="drag-label" dragClass="setDrag" @click.right.prevent="">
                <div class="drag-wrapper">
                    <input type="radio" :value="champion" v-model="cs.selectedChampion" class="peer hidden" />
                    <img :src="`/img/champions/${clean(champion.name)}.webp`" class="load-img drag-img scale-[115%]"
                        draggable="false" />
                </div>
            </label>


        </div>
    </TransitionGroup>

    <div class="aspect-square basis-18"></div>
    <div class="aspect-square basis-18"></div>
    <div class="aspect-square basis-18"></div>
    <div class="aspect-square basis-18"></div>
    <div class="aspect-square basis-18"></div>
    <div class="aspect-square basis-18"></div>

</VueDraggable>
</template>

<style scoped></style>
