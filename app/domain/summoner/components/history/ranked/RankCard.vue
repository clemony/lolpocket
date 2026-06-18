<script setup lang="ts">
import { romanNumeral } from "~~/layers/lib/shared/utils/format"

const {
  title,
  class: className,
  //entry,
} = defineProps<{
  entry: RankedEntry | undefined
  title?: string
  class?: HTMLAttributes["class"]
}>()

const entry = {
  name: "",
  division: "3",
  loss: 70,
  lp: 82,
  queue: "420",
  tier: "Emerald",
  win: 100,
}

const wr = computed(() => {
  if (!entry) {
    return
  }
  if (entry.win) {
    const total = entry.win + (entry?.loss || 0)
    return roundDecimalToPercent(entry.win, total)
  }
  return 0
})
</script>

<template>
  <div
    :style="{
      /*     backgroundColor: `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`, */
    }"
    class="relative grid size-max place-items-center rounded-full p-2">
    <h2
      :style="{
        /*       color: `color-mix(in oklab, var(--color-p0) 10%, var(--color-${entry?.tier?.toLowerCase()}) 90%)`, */
      }"
      class="absolute top-10 leading-none font-bold tracking-tight text-shadow-xs">
      {{ wr ?? 0 }}
    </h2>
    <div
      class="absolute bottom-6 inline-flex items-end justify-self-center align-baseline text-sm font-medium tracking-tight">
      {{ entry?.lp ?? 0 }} LP
    </div>
    <div class="absolute mt-0.5 grid place-items-center overflow-hidden">
      <!-- crest -->
      <img
        v-if="!entry"
        class="size-24 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-28 object-contain drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />
      <UBadge
        v-if="entry"
        variant="solid"
        color="base"
        size="xs"
        :label="romanNumeral[Number(entry?.division)]"
        :ui="{
          base: 'absolute right-2 bottom-3 grid aspect-square place-items-center gap-0 rounded-full bg-p0/30 p-0 ring-p0/60 backdrop-blur-sm',
          label: 'p-0! font-semibold tracking-wide opacity-60',
        }" />
    </div>

    <ChampWinrate
      v-if="entry"
      :winrate="false"
      :thickness="10"
      :entry
      :color="entry?.tier?.toLowerCase()"
      :arc-label="title"
      :style="{
        arc: {
          color: `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
        },
      }"
      :size="48"
      :tooltip="{
        ui: {
          content: 'h-max!',
        },
        content: {
          side: 'right',
        },
      }"
      :ui="{
        label: '-translate-y-6 text-md! font-medium text-pc!',

        arc: 'scale-112 text-pc **:stroke-[7%]!',
        arcLabel: 'text-sm font-medium uppercase',
        root: 'size-max drop-shadow-sm',
      }">
      <template #content>
        <div>
          <p
            class="flex flex-nowrap items-center justify-center gap-1 text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
            <span>{{ entry ? entry.win : 0 }}&thinsp;W</span>&nbsp;

            <span>{{ entry ? entry.loss : 0 }}&thinsp;L</span>
          </p>

          <p>{{ entry ? entry?.win + entry?.loss : 0 }} played</p>
        </div>
      </template>
    </ChampWinrate>
  </div>
</template>
