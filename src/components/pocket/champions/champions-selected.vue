<script setup lang="ts">
import { useChampStore } from '@/stores/champStore'
import { VueDraggable } from 'vue-draggable-plus'
import { usePocketStore } from '@/stores/pocketStore'

const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()


const pocket = ref(ps.getPocket(props.pocketKey))


const champions = computed(() => {
    return pocket.value?.champions[0]?.champions || []
})



// Watch for any changes in the champions data and persist it to the store
watch(
    champions,
    (newChampions) => {
        if (pocket.value) {
            pocket.value.champions[0].champions = newChampions
            ps.$persist() // Ensure persistence when champions update
        }
    },
    { deep: true }
)

function onAdd(e) {
    console.log(e)
    if (!pocket.value && pocket.value.champions[0].starred) {
        pocket.value.champions[0].starred = e.data.name
        console.log(pocket.value.champions[0].starred)
    }
}
</script>

<template>
<VueDraggable v-if="pocket" v-model="pocket.champions[0].champions" :delay="0" :animation="300"
    :group="{ name: 'champs', pull: true, put: true, revertClone: false }" :prevent-on-filter="true"
    direction="horizontal" :bubbleScroll="false" :scroll="false" ghostClass="ghosty" :force-fallback="true"
    :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true" @add="onAdd($event)"
    class="drag-draggable h-full flex-nowrap! items-center overflow-y-clip overflow-x-scroll px-0.5 py-1 scrollbar-hide">
    <!-- Display each champion in the draggable list -->
    <div v-for="(champion, index) in pocket.champions[0].champions" :key="champion.name"
        class="group relative shrink-0 size-[68px]">
        <label class="drag-label shrink-0 size-[68px]" dragClass="setDrag">
            <div class="drag-wrapper">
                <img :src="champion.img" class="drag-img scale-[115%]" draggable="false" />
                <input type="radio" :value="champion" v-model="cs.selectedChampion" class="hidden" />
            </div>
        </label>

        <label
            class="group/star absolute top-1 left-1 grid h-full w-4 cursor-pointer place-content-center  *:transition-all z-20 *:duration-300">
            <input type="radio" name="starSet" v-model="pocket.champions[0].starred" class="peer hidden"
                :value="champion.name" @change="console.log(pocket.champions[0].starred)"
                :checked="pocket.champions[0].starred == champion.name" />
            <icon icon="iconoir:star-dashed"
                class="absolute z-10 size-4 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20" />
            <icon icon="iconoir:star-solid"
                class="absolute z-0 size-4 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80" />
        </label>


        <button @click="cs.removeChamp(champion.name, pocket)"
            class="absolute right-1.5 top-1.5 rounded-full bg-b1 opacity-0 transition-all duration-300 group-hover:opacity-70">
            <icon icon="teenyicons:x-circle-solid" />
        </button>
    </div>

    <!-- Quick Search Placeholder -->
    <VDropdown theme="default" alt="Quick Search" :distance="8" class="ghosty drag-label flex  size-[62px] shrink-0">
        <div class="cursor-pointer bg-[url('/img/UI/frame.webp')] bg-contain bg-center"></div>
        <template #popper>
            <!--        <QuickSearch :array="filteredChamps" v-model:quickSearch="quickSearch" type="champions" /> -->
        </template>
    </VDropdown>
</VueDraggable>
</template>
