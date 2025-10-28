<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const { champion, pocket: p } = defineProps<{
  champion: ChampionIndex
  pocket: Pocket
}>()
const pocket = computed <Pocket>(() => p)
const open = ref<boolean>(false)

function handleRemove() {
  const champ = pocket.value.champions.findIndex(c => c === champion.key)
  if (champ)
    pocket.value.champions.splice(champ, 1)
}
</script>

<template>
  <div class="h-30 overflow-hidden @7xl:basis-1/6 basis-1/3 @3xl:basis-1/4 shrink-0 ">
    <Popover
      v-model:open="open">
      <CarouselItem
        class="overflow-hidden relative group/all p-1.5 h-30 ">
        <PopoverTrigger
          class="hover:ring ring-bc/60 focus:ring open:ring open:ring-offset-3  focus:ring-offset-2 ring-offset-b1 transition-all duration-100 rounded-lg embla__slide group/wrap grid place-items-center size-full shrink-0  *:last:pointer-events-none focus:*:last:pointer-events-auto">
          <div
            :class="cn('pointer-events-none size-full group rounded-lg overflow-hidden relative border-0 grid place-items-center overflow-hidden embla__slide z-0 shrink-0 p-0 shadow-sm shadow-black/15 drop-shadow-sm',
                       'after:inset-0 after:bg-radial-[at_75%_25%] after:from-45% after:absolute after:from-transparent after:to-black/70 after:pointer-events-none after:z-2',
            )">
            <AspectRatio
              :ratio="16 / 9"
              class="embla__parallax__layer  p-0 size-full scale-[360%] inset-0  **:pointer-events-none  relative  object-center shrink-0">
              <Champion
                :k="champion.key"
                type="centered"
                class="embla__slide__img embla__parallax__img shrink-0 translate-y-6 bg-black">
              </Champion>
            </AspectRatio>
          </div>
        </PopoverTrigger>
        <button
          :for="`${champion}-select`"
          class=" m-1.5 rounded-lg justify-between z-2 flex items-end absolute bg-black/0 group-has-focus/all:bg-black/70 group-has-open/all:bg-black/70 pointer-events-none group-has-focus/all:pointer-events-auto group-has-open/all:pointer-events-auto transition-colors duration-300 inset-0 py-1 px-2.5 **:text-white"
          @click="handleRemove()">
          <input
            v-model="pocket.champions"
            :name="`${champion}-select`"
            :disabled="!open"
            type="checkbox"
            :value="champion.key"
            class="peer hidden" />
          <h1 class=" dss  font-bold">
            {{ champion.name }}
          </h1>

          <icon
            name="ic:sharp-arrow-upward"
            class="rotate-180 mb-2 group-open/wrap:opacity-70 opacity-0" />
        </button>
      </CarouselItem>
      <!--       <PocketChampionMenu
        v-if="open"
        class="w-[var(--reka-popover-trigger-width)]"
        :champion
        :pocket /> -->
    </Popover>
  </div>
</template>
