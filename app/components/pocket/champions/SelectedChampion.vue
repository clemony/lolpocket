<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { champion, pocket: p } = defineProps<{
  champion: Index
  pocket: Pocket
}>()
const pocket = computed<Pocket>(() => p)
const pocketChampions = computed({
  get: () => pocket.value.champions ?? [],
  set: (v: string[]) => {
    pocket.value.champions = v
  },
})
const open = ref<boolean>(false)

function handleRemove() {
  const champ = pocketChampions.value.findIndex((c) => c === champion.key)
  if (champ >= 0) pocketChampions.value.splice(champ, 1)
}
</script>

<template>
  <div
    class="h-30 shrink-0 basis-1/3 overflow-hidden @3xl:basis-1/4 @7xl:basis-1/6">
    <UPopover v-model:open="open">
      <CarouselItem class="group/all relative h-30 overflow-hidden p-1.5">
        <UButton
          class="embla__slide group/wrap grid size-full shrink-0 place-items-center rounded-lg ring-pc/60 ring-offset-p0 transition-all duration-100 *:last:pointer-events-none open:ring open:ring-offset-3 hover:ring focus:ring focus:ring-offset-2 focus:*:last:pointer-events-auto">
          <div
            :class="
              cn(
                'group embla__slide pointer-events-none relative z-0 grid size-full shrink-0 place-items-center overflow-hidden rounded-lg border-0 p-0 shadow-sm shadow-black/15 drop-shadow-sm',
                `after:pointer-events-none after:absolute after:inset-0 after:z-2 after:bg-radial-[at_75%_25%] after:from-transparent after:from-45% after:to-black/70`
              )
            ">
            <AspectRatio
              class="embla__parallax__layer relative inset-0 size-full shrink-0 scale-[360%] object-center p-0 **:pointer-events-none"
              :ratio="16 / 9">
              <Champion
                class="embla__slide__img embla__parallax__img shrink-0 translate-y-6 bg-black"
                :k="champion.key"
                type="centered" />
            </AspectRatio>
          </div>
        </UButton>
        <button
          class="pointer-events-none absolute inset-0 z-2 m-1.5 flex items-end justify-between rounded-lg bg-black/0 px-2.5 py-1 transition-colors duration-300 **:text-white group-has-open/all:pointer-events-auto group-has-open/all:bg-black/70 group-has-focus/all:pointer-events-auto group-has-focus/all:bg-black/70"
          :for="`${champion}-select`"
          @click="handleRemove()">
          <input
            v-model="pocketChampions"
            class="peer hidden"
            :name="`${champion}-select`"
            :disabled="!open"
            type="checkbox"
            :value="champion.key" />
          <h1 class="font-bold ds-sm">
            {{ champion.name }}
          </h1>

          <icon
            class="mb-2 rotate-180 opacity-0 group-open/wrap:opacity-70"
            name="ic:sharp-arrow-upward" />
        </button>
      </CarouselItem>
      <!--       <PocketChampionMenu
        v-if="open"
        class="w-[var(--reka-popover-trigger-width)]"
        :champion
        :pocket /> -->
    </UPopover>
  </div>
</template>
