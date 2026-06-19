<script setup lang="ts">
import type { ProgressProps } from "@nuxt/ui"
import { romanNumeral } from "~~/layers/lib/shared/utils/format"

const {
  label,
  class: className,
  //entry,
  tier,
} = defineProps<{
  entry?: RankedEntry | undefined
  label?: string
  class?: HTMLAttributes["class"]
  tier?: string
}>()

const entry: RankedEntry = {
  name: "",
  division: "3",
  loss: 70,
  lp: 82,
  queue: "420",
  tier: tier || "",
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

function asProgressColor(color: string): ProgressProps["color"] {
  return color as ProgressProps["color"]
}
</script>

<template>
  <div class="relative grid size-max place-items-center rounded-full">
    <!-- WINRATE -->
    <!--     <UBadge
      size="sm"
      :label="wr ? `${wr}%` : ''"
      :style="{
        color: `var(--color-${entry?.tier?.toLowerCase()})`,
        backgroundColor: `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
      }"
      :ui="{
        base: 'absolute top-10.5 ring-0',
        label:
          'text-md leading-none font-semibold tracking-wide text-shadow-black/4 text-shadow-xs',
      }" />
 -->
    <!-- LP -->
    <!--     <UBadge
      size="xs"
      :label="`${entry?.lp ?? 0} LP`"
      :style="{
        backgroundColor: `var(--color-${entry?.tier?.toLowerCase()})`,
        color: `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
      }"
      :ui="{
        base: 'absolute bottom-7',
        label:
          'text-2xs! font-bold tracking-tight text-shadow-black/4 text-shadow-xs',
      }" /> -->

    <!-- CREST -->
    <div class="absolute mt-0.5 grid place-items-center overflow-hidden">
      <img
        v-if="!entry"
        class="size-24 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-28 object-contain contrast-85 drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />
      <!--       <UBadge
        v-if="entry"
        variant="solid"
        color="base"
        size="xs"
        :label="romanNumeral[Number(entry?.division)]"
        :ui="{
          base: 'absolute right-2 bottom-3 grid aspect-square place-items-center gap-0 rounded-full bg-p0/30 p-0 ring-p0/60 backdrop-blur-sm',
          label: 'p-0! font-semibold tracking-wide opacity-60',
        }" /> -->
    </div>

    <!--     CHART -->
    <RadialWinrate
      v-if="entry"
      :winrate="false"
      :thickness="11"
      :entry
      :aria-label="`Winrate for ${entry?.tier?.toLowerCase()}`"
      :color="entry?.tier?.toLowerCase()"
      :size="48"
      :tooltip="{
        arrow: true,
        ui: {
          content: 'h-max! py-2! rounded-xl',
        },
        content: {
          side: 'right',
        },
      }"
      :style="{
        color: `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
      }"
      :ui="{
        ring: 'scale-111 text-pc drop-shadow-sm **:stroke-[6.9%]!',
        progress: 'drop-shadow-sm',
        root: 'size-max',
      }">
      <!-- TOOLTIP -->
      <template #content>
        <div>
          <div class="inline-flex items-center gap-1.5 pr-6">
            <img
              :src="`/img/crests/mini/${entry?.tier?.toLowerCase()}.webp`"
              :alt="`${entry?.tier?.toLowerCase()} ranked crest`"
              class="inline size-4.5 object-contain" />
            <h6>
              {{ entry?.tier }}&thinsp;{{
                romanNumeral[Number(entry?.division)]
              }}
            </h6>
          </div>
          <div class="pl-6">
            <p
              class="flex flex-nowrap items-center gap-1 text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
              <span>{{ entry ? entry.win : 0 }}&thinsp;W&thinsp;-&thinsp;</span>
              <span>{{ entry ? entry.loss : 0 }}&thinsp;L</span>
            </p>

            <p>{{ entry ? entry?.win + entry?.loss : 0 }} played</p>
          </div>
        </div>
      </template>
    </RadialWinrate>

    <div class="absolute bottom-8">
      <UProgress
        :color="asProgressColor(entry?.tier?.toLowerCase())"
        :max="100"
        :model-value="entry?.lp ?? 0"
        :ui="{ root: 'h-3 w-22', base: 'h-full' }" />
    </div>
  </div>
</template>
