<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { champion, pocket: p } = defineProps<{
  champion: ChampionIndex
  pocket: Pocket
}>()
const pocket = computed<Pocket>(() => p)
const open = ref<boolean>(false)

function handleRemove() {
  const champ = pocket.value.champions.findIndex(c => c === champion.key)
  if (champ)
    pocket.value.champions.splice(champ, 1)
}
</script>

<template>
  <div
    class="
      h-30 shrink-0 basis-1/3 overflow-hidden @3xl:basis-1/4 @7xl:basis-1/6
    ">
    <Popover v-model:open="open">
      <CarouselItem class="group/all relative h-30 overflow-hidden p-1.5">
        <PopoverTrigger
          class="
            embla__slide group/wrap ring-bc/60 ring-offset-b1 grid size-full
            shrink-0 place-items-center rounded-lg transition-all duration-100
            *:last:pointer-events-none open:ring open:ring-offset-3 hover:ring
            focus:ring focus:ring-offset-2 focus:*:last:pointer-events-auto
          ">
          <div
            :class="
              cn('group embla__slide pointer-events-none relative z-0 grid size-full shrink-0 place-items-center overflow-hidden rounded-lg border-0 p-0 shadow-sm shadow-black/15 drop-shadow-sm',
                 `
                  after:pointer-events-none after:absolute after:inset-0
                  after:z-2 after:bg-radial-[at_75%_25%] after:from-transparent
                  after:from-45% after:to-black/70
                `,
              )
            ">
            <AspectRatio
              :ratio="16 / 9"
              class="
                embla__parallax__layer relative inset-0 size-full shrink-0
                scale-[360%] object-center p-0 **:pointer-events-none
              ">
              <Champion
                :k="champion.key"
                type="centered"
                class="
                  embla__slide__img embla__parallax__img shrink-0 translate-y-6
                  bg-black
                ">
              </Champion>
            </AspectRatio>
          </div>
        </PopoverTrigger>
        <button
          :for="`${champion}-select`"
          class="
            pointer-events-none absolute inset-0 z-2 m-1.5 flex items-end
            justify-between rounded-lg bg-black/0 px-2.5 py-1 transition-colors
            duration-300 **:text-white group-has-open/all:pointer-events-auto
            group-has-open/all:bg-black/70
            group-has-focus/all:pointer-events-auto
            group-has-focus/all:bg-black/70
          "
          @click="handleRemove()">
          <input
            v-model="pocket.champions"
            :name="`${champion}-select`"
            :disabled="!open"
            type="checkbox"
            :value="champion.key"
            class="peer hidden" />
          <h1 class="dss font-bold">
            {{ champion.name }}
          </h1>

          <icon
            name="ic:sharp-arrow-upward"
            class="mb-2 rotate-180 opacity-0 group-open/wrap:opacity-70" />
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
