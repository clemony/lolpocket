<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { useRuneStore } from '@/stores/runeStore'
import { usePocketStore } from '@/stores/pocketStore'
import { useRoute } from 'vue-router'
const rs = useRuneStore()

const ps = usePocketStore()

const route = useRoute()
const props = defineProps<{
    pocketKey: string
}>()

// Reactive reference for the pocket
const pocket = ref(ps.getPocket(props.pocketKey))

// Sync with the latest data from the store when the component is mounted
onMounted(() => {
    if (pocket.value) {
        // Fetch the latest pocket data using the provided pocketKey
        const latestPocket = ps.getPocket(props.pocketKey)
        if (latestPocket) {
            pocket.value = latestPocket
        }

        // Ensure new runes are set up if none exist
        if (!pocket.value.runes[0].runeSets.length) {
            rs.newRuneSet()
        }
    }
})

// Watch for changes in the route's pocketKey and update the local state
watch(
    () => route.params.pocketKey,
    (newKey) => {
        if (newKey) {
            const updatedPocket = ps.getPocket(newKey)
            if (updatedPocket) {
                pocket.value = updatedPocket
            }
        }
    }
)

// Watch for props pocketKey changes and update pocket data
watch(
    () => props.pocketKey,
    (newKey) => {
        if (newKey) {
            const updatedPocket = ps.getPocket(newKey)
            if (updatedPocket) {
                pocket.value = updatedPocket
            }
        }
    }
)
</script>

<template>
<div v-if="pocket" class="h-full w-full overflow-y-scroll overscroll-none bg-base-200/20 pt-8">
    <!-------------------------------- HEADER --------------------------------->

    <div
        class="frost absolute left-0 top-0 z-40 flex !h-fit w-full flex-wrap items-center justify-end gap-4 border-b border-b-base-300 px-2 py-1">
        <h4 class="!font-semibold grow justify-start">Rune Sets</h4>
        <button class="btn btn-outline btn-xs relative h-full items-center rounded-md border-none font-normal"
            @click="rs.newRuneSet(pocket.key)">
            <Icon icon="teenyicons:add-solid" class="-mt-[2px] size-3 self-center" />
            new set
        </button>
    </div>

    <!-------------------------------⟢ SETS ⟣-------------------------------->

    <div class="z-0 flex flex-col overflow-y-scroll">
        <VueDraggable class="grid overflow-hidden" tag="div" v-model="pocket.runes[0].runeSets" group="sets"
            dragClass="setDrag" direction="vertical">
            <label v-for="(set, index) in pocket.runes[0].runeSets" :key="set.key" :class="set.primary"
                class="gradient overlay pointer-events-auto relative z-0 grid h-16 cursor-pointer items-center overflow-hidden transition-all duration-1000 after:absolute after:right-0 after:z-10 after:h-full after:w-[200%] after:bg-gradient-to-r after:from-base-200/30 after:via-base-200 after:via-55% after:to-base-200 odd:after:brightness-[108%] even:after:brightness-[106%] hover:after:-right-1/2 has-[#runeSets:checked]:after:-right-full">
                <div
                    class="group z-20 flex h-full w-full items-center gap-4 border-b border-base-200 bg-clip-padding bg-right p-2 transition-all duration-200">
                    <input type="radio" :value="index" id="runeSets" v-model="pocket.runes[0].selected"
                        class="peer hidden" @change="console.log(pocket.runes[0].selected)" />

                    <!-----------------------------⟢ DRAG ⟣-------------------------------->

                    <div
                        class="ml-1 grid grid-cols-[repeat(3,_3rem)] place-items-center items-center justify-center justify-self-center py-1 opacity-75 grayscale-[0.25] transition-all duration-300 group-hover:opacity-95 group-hover:grayscale-0 peer-checked:grayscale-0 peer-[:checked]:opacity-100 peer-checked:[&_#blank]:opacity-80 peer-checked:[&_#blank]:ring-neutral/15">
                        <img v-if="
                            set.keystone.name != 'none' &&
                            set.keystone.name != '' &&
                            set.keystone != undefined
                        " :src="set.keystone.img" class="drop-shadow-soft h-11" />
                        <img v-else src="/img/runes/blankRune.webp"
                            class="h-8 rounded-full opacity-70 ring-1 ring-base-300/90 group-hover:opacity-90"
                            id="blank" />
                        <img v-if="
                            set.secondary != 'none' &&
                            set.secondary != '' &&
                            set.secondary != undefined
                        " :src="'/img/runes/' + set.secondary + '.webp'" class="drop-shadow-softer h-9 p-1.5" />
                        <img v-else src="/img/runes/blankRune.webp"
                            class="h-8 rounded-full opacity-70 ring-1 ring-base-300/90 group-hover:opacity-90"
                            id="blank" />
                    </div>
                    <div class="grow text-sm"><!-- {{ set.name }} --></div>

                    <!-----------------------------⟢ menu ⟣-------------------------------->
                    <label
                        class="group/star relative grid h-full w-4 cursor-pointer place-content-center *:h-full *:transition-all *:duration-300">
                        <input type="radio" name="defaultDisplayRunes" :value="index" class="peer hidden"
                            v-model="pocket.runes[0].starred" />
                        <icon icon="iconoir:star-dashed"
                            class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20" />
                        <icon icon="iconoir:star-solid"
                            class="absolute z-0 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80"
                            id="solid" />
                    </label>

                    <button
                        class="flex items-center justify-center justify-self-end rounded-btn py-1 opacity-50 hover:bg-base-200 hover:opacity-100"
                        alt="menu">
                        <icon icon="teenyicons:more-vertical-outline" class="size-5" />
                    </button>

                    <!--   
                          <div
              class="grid grid-cols-3 *:aspect-square *:size-5 *:rounded-btn *:text-base-content/80 *:transition-all *:flex *:justify-center *:items-center *:duration-300 gap-1.5">  <button class="hover:bg-base-200" alt="Clear Items" title="Clear Items" @click="rs.resetRunes()">
                <icon icon="teenyicons:clockwise-outline" class="size-[0.8rem] pb-[2px]" />
              </button>

              <button
                class="disabled:bg-transparent hover:bg-base-200 disabled:hover:bg-transparent disabled:opacity-40"
                alt="Delete Set" title="Delete Set" @click="rs.deleteSet(set.key)" :disabled="rs.runeSets.length == 1">
                <icon icon="ph:trash-light" class="size-3.5" />
              </button>
            </div> -->
                </div>
                <!-- <div class="h-[1px] w-full"></div> -->
            </label>
        </VueDraggable>
    </div>
</div>
</template>

<style scoped>
.overlay:after {
    content: '';

    @apply transition-all duration-500;
}

#bghover:hover .overlay:after {
    @apply !-right-[50%];
}
</style>
