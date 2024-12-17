<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
import { useTempStore } from '@stores/tempStore'
=======
import { useChampStore } from '@/stores/champStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useTempStore } from '@stores/tempStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
import { VueDraggable } from 'vue-draggable-plus'
import type { pocket } from 'types'
import { removeChamp } from '@utils/pocketUtilities'
const ts = useTempStore()

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champions = computed(() => {
    return pocket.value?.champions[0]?.champions || []
})
</script>

<template>
    <VueDraggable
        v-if="pocket"
        v-model="pocket.champions[0].champions"
        :delay="0"
        :animation="300"
        :group="{ name: 'champs', pull: true, put: true, revertClone: false }"
        :prevent-on-filter="true"
        direction="horizontal"
        :bubbleScroll="false"
        :scroll="false"
        ghostClass="ghosty"
        :force-fallback="true"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        class="drag-draggable scrollbar-hide h-full flex-nowrap! items-center gap-5! overflow-x-scroll overflow-y-clip px-2 py-2">
        <div
            v-for="(champion, index) in pocket.champions[0].champions"
            :key="champion.name"
            class="border-b3 shadow-warm first:ring-neutral/40 first:ring-offset-precision relative grid size-22 shrink-0 place-items-center rounded-lg border first:ring-1 first:ring-offset-2">
            <label
                class="size-full overflow-hidden rounded-lg"
                dragClass="setDrag">
                <img
                    :src="champion.img"
                    class="size-22 scale-[115%]"
                    draggable="false" />
                <input
                    type="radio"
                    :value="champion"
                    v-model="ts.selectedChampion"
                    class="hidden" />
            </label>

            <button
                @click="removeChamp(champion.name, pocket)"
                class="bg-b1 absolute top-1.5 right-1.5 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-70">
                <icon icon="teenyicons:x-circle-solid" />
            </button>
        </div>
    </VueDraggable>
</template>
