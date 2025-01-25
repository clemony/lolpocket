<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
  selected: number
}>()

const emit = defineEmits(['update:selected'])

const ps = usePocketStore()

// Reactive reference for the pocket
const pocket = ref(props.pocket)

const selectedSet = ref(0)
</script>

<template>
  <div class="bg-b2/20 h-full w-full overflow-y-scroll overscroll-none pt-8">
    <div class="frost border-b-b3 absolute top-0 left-0 z-40 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-2 py-1">
      <h5 class="grow justify-start font-semibold!">
        Rune Sets
      </h5>
      <button
        class="btn btn-outline btn-xs relative h-full items-center rounded-md border-none font-normal"
        @click="newRuneSet(pocket.key)"
      >
        <Icon
          name="teenyicons:add-solid"
          class="-mt-[2px] size-3 self-center"
        />
        new set
      </button>
    </div>

    <div class="z-0 flex flex-col overflow-y-scroll">
      <VueDraggable
        v-model="pocket.runes[0].runeSets"
        class="grid overflow-hidden"
        tag="div"
        group="sets"
        drag-class="setDrag"
        direction="vertical"
      >
        <label
          v-for="(set, index) in pocket.runes[0].runeSets"
          :key="set.key"
          :class="set.primary"
          class="gradient overlay after:from-b2/30 after:via-b2 after:to-b2 pointer-events-auto relative z-0 grid h-16 cursor-pointer items-center overflow-hidden transition-all duration-1000 after:absolute after:right-0 after:z-10 after:h-full after:w-[200%] after:bg-linear-to-r after:via-55% odd:after:brightness-[108%] even:after:brightness-[106%] hover:after:-right-1/2 has-[#runeSets:checked]:after:-right-full"
        >
          <div class="group border-b2 z-20 flex h-full w-full items-center gap-4 border-b bg-clip-padding bg-right p-2 transition-all duration-200">
            <input
              id="runeSets"
              v-model="selectedSet"
              type="radio"
              :value="index"
              class="peer hidden"
              @change="emit('update:selected', selectedSet)"
            />

            <!-----------------------------⟢ DRAG ⟣-------------------------------->

            <div
              class="[&_#blank]:peer-checked:ring-neutral/15 ml-1 grid grid-cols-[repeat(3,3rem)] place-items-center items-center justify-center justify-self-center py-1 opacity-75 grayscale-[0.25] transition-all duration-300 group-hover:opacity-95 group-hover:grayscale-0 peer-checked:opacity-100 peer-checked:grayscale-0 [&_#blank]:peer-checked:opacity-80"
            >
              <img class="drop-shadow-soft h-11" />

              <img
                :src="`/img/runes/${set.secondary}.webp`"
                class="drop-shadow-softer h-9 p-1.5"
              />
            </div>
            <div class="text-2 grow"><!-- {{ set.name }} --></div>

            <!-----------------------------⟢ menu ⟣-------------------------------->
            <label class="group/star relative grid h-full w-4 cursor-pointer place-content-center *:h-full *:transition-all *:duration-300">
              <input
                v-model="pocket.runes[0].starred"
                type="radio"
                name="defaultDisplayRunes"
                :value="index"
                class="peer hidden"
              />
              <icon
                name="iconoir:star-dashed"
                class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20"
              />
              <icon
                id="solid"
                name="iconoir:star-solid"
                class="absolute z-0 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80"
              />
            </label>

            <button
              class="rounded-btn hover:bg-b2 flex items-center justify-center justify-self-end py-1 opacity-50 hover:opacity-100"
              alt="menu"
            >
              <icon
                name="teenyicons:more-vertical-outline"
                class="size-5"
              />
            </button>

            <div class="*:rounded-btn *:text-bc/80 grid grid-cols-3 gap-1.5 *:flex *:aspect-square *:size-5 *:items-center *:justify-center *:transition-all *:duration-300">
              <button
                class="hover:bg-b2"
                alt="Clear Items"
                title="Clear Items"
                @click="resetRunes(pocket, set.key)"
              >
                <icon
                  name="teenyicons:clockwise-outline"
                  class="size-[0.8rem] pb-[2px]"
                />
              </button>

              <button
                class="hover:bg-b2 disabled:bg-transparent disabled:opacity-40 disabled:hover:bg-transparent"
                alt="Delete Set"
                title="Delete Set"
                :disabled="pocket.runes[0].runeSets.length == 1"
                @click="deleteRuneSet(pocket, set.key)"
              >
                <icon
                  name="ph:trash-light"
                  class="size-3.5"
                />
              </button>
            </div>
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
  transition: all 0.5s ease;
}

#bghover:hover .overlay:after {
  right: 50% !important;
}
</style>
