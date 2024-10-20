<script setup lang="ts">
import { useGeneralStore } from '../../stores/generalStore'
import { ref, computed } from 'vue'
import { imageIn, imageOut } from '../../script/animations'
import { useChampStore } from '../../stores/champStore'
import { VueDraggable } from 'vue-draggable-plus'
import { usePocketStore } from '../../stores/pocketStore'
import { useDataStore } from '../../stores/dataStore'

const us = useGeneralStore()
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

const query = ref('')

// Search list based on the query
const searchList = computed(() => {
    return cs.champions.filter((champion) =>
        champion.name.toLowerCase().includes(query.value.toLowerCase())
    )
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

    return filtered
})

function onUpdate() {
    console.log('update')
}
function remove() {
    console.log('remove')
}
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
        @remove="remove"
        class="items-start content-start justify-around px-2 pt-12 pb-4 drag-draggable scrollbar-hide">
        <TransitionGroup @enter="imageIn" name="fade" @leave="imageOut">
            <div
                v-for="(champion, index) in filteredChampions"
                :key="champion.name"
                ref="list"
                class="basis-18">
                <label
                    class="drag-label"
                    dragClass="setDrag"
                    @click.right.prevent="">
                    <div class="drag-wrapper">
                        <input
                            type="radio"
                            :value="champion"
                            v-model="cs.selectedChampion"
                            class="hidden peer" />
                        <img
                            :src="`/img/champions/${champion.name.replace(/\s/g, '').replace(/\'/g, '').replace(/\./g, '').replace(/\&/g, '')}.webp`"
                            class="load-img scale-[115%] drag-img"
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
