<script setup lang="ts">
const props = defineProps<{
  entry: RankedEntry
  title?: string
  class?: HTMLAttributes['class']

}>()

const entry = computed (() => props.entry)

const color1 = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--color-${entry.value.tier}`)
})
const colors = [getColorFromVariable('--color-b3'), color1.value]

const winrate = computed (() => entry.value.wins / (entry.value.wins + entry.value.losses) * 100)
</script>

<template>
  <Field :class="cn('w-120 max-w-120 h-42 max-h-42  bg-b2/30 drop-shadow-xs border-b3/40 py-0 ', props.class)" :title="`Ranked ${props.title}`">
    <div class="overflow-hidden size-full grid grid-cols-[1.1fr_1fr_1fr] place-items-center h-42 content-center">
      <div class="grid mt-0.5 overflow-hidden place-items-center">
        <!-- crest -->
        <img
          :src="`/img/crests/${entry.tier.toLowerCase()}.webp`"
          class="drop-shadow-md object-contain size-28 drop-shadow-black/30 " />
      </div>

      <div class="relative grid place-items-center size-full">
        <div class="relative size-21 overflow-hidden mt-1 grid place-items-center rounded-lg">
          <DonutSkeleton class="absolute size-21" />
          <div class="radial-progress dst absolute " :style="{ '--value': winrate, '--size': '5.25rem', 'color': getColorFromVariable(`--color-${entry.tier.toLowerCase()}`) }" role="progressbar">
            <span class="text-bc font-medium dst">
              {{ winrate.toFixed(1).replace('.0', '') }}%
            </span>

          </div>
        </div>
      </div>

      <div class=" pt-3  overflow-hidden font-medium flex flex-col items-end justify-center pb-3 text-end gap-2.75 ">
        <p class="capitalize">
          {{ entry.tier.toLowerCase() }} {{ entry.division }}
        </p>

        <p class="capitalize font-semibold text-4">
          {{ entry.lp }} LP
        </p>

        <p v-tippy="`${entry.wins + entry.losses} total`" class="hover:border-b-bc border-b-transparent border-b  flex text-1 items-center gap-1 text-end justify-end text-nowrap">
          <span>{{ entry.wins }}W </span>
          <span>{{ entry.losses }}L</span>
        </p>
      </div>
    </div>
  </Field>
</template>
