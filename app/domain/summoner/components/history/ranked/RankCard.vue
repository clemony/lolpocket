<script setup lang="ts">
import type { ProgressProps } from "@nuxt/ui"
import { romanNumeral } from "~~/layers/lib/shared/utils/format"
import { rankAbbr } from "~~/shared/constants/misc/ranks"

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
  <div
    :style="{
      '--color-rank': `var(--color-${entry?.tier?.toLowerCase()})`,
      '--color-rank-light': `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
    }"
    class="relative grid size-max place-items-center rounded-full">
    <!-- WINRATE -->
    <div class="absolute top-8.5 flex flex-col items-center gap-0.5">
      <p class="text-sm leading-none font-semibold">
        {{ wr ? `${wr}%` : "" }}
      </p>
      <div class="text-3xs leading-none font-medium text-pc/60">
        {{ entry ? entry?.win + entry?.loss : 0 }} played
      </div>
    </div>

    <!-- LP -->
    <div class="absolute bottom-5.5 flex flex-col items-center gap-0.5">
      <div class="text-xs leading-none font-medium">
        {{ entry?.tier ? rankAbbr[entry?.tier] : "" }}
        {{ romanNumeral[Number(entry?.division)] }}
      </div>
      <div class="text-3xs leading-none font-medium text-pc/60">
        {{ entry?.lp ?? 0 }}&thinsp;LP
      </div>
    </div>

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
          arrow: ' group-data-[side=left]/tt:scale-x-100!',
          content: 'h-max! py-1! rounded-xl',
        },
        content: {
          side: 'right',
        },
      }"
      :style="{
        color: `var(--color-rank-light)`,
      }"
      :ui="{
        ring: 'scale-111 text-pc drop-shadow-sm **:stroke-[6.9%]!',
        progress: 'drop-shadow-sm',
        root: 'size-max',
      }">
      <!-- TOOLTIP -->
      <template #content>
        <div class="flex flex-col items-center gap-1 px-3">
          <div class="inline-flex items-center gap-1.5">
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
          <div class="flex flex-col items-center">
            <p
              class="flex flex-nowrap items-center gap-1 text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
              <span
                >{{ entry ? entry.win : 0 }}&thinsp;W&thinsp;&nbsp;&thinsp;{{
                  entry ? entry.loss : 0
                }}&thinsp;L</span
              >
            </p>

            <p>{{ entry ? entry?.win + entry?.loss : 0 }} played</p>
          </div>
        </div>
      </template>
    </RadialWinrate>
  </div>
</template>
