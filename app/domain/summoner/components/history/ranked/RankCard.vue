<script setup lang="ts">
import { romanNumeral } from "~~/layers/lib/shared/utils/format"

const { entry } = defineProps<{
  entry?: RankedEntry | Partial<RankedEntry>
}>()

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

function asEntry(entry: RankedEntry | Partial<RankedEntry>): RankedEntry {
  return entry as RankedEntry
}
</script>

<template>
  <div
    :style="{
      '--color-rank': `var(--color-${entry?.tier?.toLowerCase()})`,
      '--color-rank-light': `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
    }"
    class="group/rank relative grid size-44 place-items-center rounded-full">
    <!-- CREST -->
    <div class="absolute z-1 mt-0.5 grid place-items-center overflow-hidden">
      <img
        v-if="!entry?.tier"
        class="size-26 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-28 object-contain contrast-85 drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />

      <div
        :class="
          cn(
            'absolute top-2 text-3xs font-semibold text-(--color-rank) uppercase',
            {
              'text-pc/30': !entry?.tier,
              'font-bold opacity-70 brightness-90': entry?.tier,
            }
          )
        ">
        {{ entry?.label && entry?.label.replace("/", "&thinsp;/&thinsp;") }}
      </div>
    </div>

    <div
      class="pointer-events-none absolute z-2 grid size-full place-items-center rounded-full bg-p0/40 opacity-0 backdrop-blur-md duration-300 group-hover/rank:opacity-100">
      <div
        class="grid grid-rows-[1.4fr_1fr_1fr] items-center justify-center gap-1 px-3 pt-2.5 pb-1.5">
        <div
          class="flex flex-col items-center gap-1 text-3xs leading-none font-medium">
          <div class="text-2xs font-medium text-pc/60">
            {{ entry?.label }}
          </div>
          <span class="text-2xs font-semibold">
            <template v-if="entry?.tier">
              {{ entry?.tier }}
              {{ entry?.division }}
            </template>
            <template v-else
              >{{ (entry?.win || 0) + (entry?.loss || 0) }} played</template
            >
          </span>
          <!-- LP -->
          <span v-if="entry?.lp" class="text-3xs text-pc/60">
            {{ entry?.lp }}&thinsp;LP
          </span>
        </div>
        <!-- WINRATE -->
        <h2
          :class="
            cn('justify-self-center text-center leading-none', {
              'text-xl': !entry?.tier,
            })
          ">
          {{ wr && entry?.tier ? `${wr}%` : "Unranked" }}
        </h2>
        <div
          class="flex flex-col items-center gap-1 text-3xs leading-none font-medium">
          <span v-if="entry?.tier"
            >{{ (entry?.win || 0) + (entry?.loss || 0) }} played</span
          >
          <span class="text-pc/60"
            >{{ entry?.win || 0 }}&hairsp;W&nbsp;{{
              entry?.loss || 0
            }}&hairsp;L</span
          >
        </div>
      </div>
    </div>

    <!--     CHART -->
    <RadialWinrate
      v-if="entry"
      :winrate="false"
      :thickness="11"
      :entry="asEntry(entry)"
      :aria-label="`Winrate for ${entry?.tier?.toLowerCase()}`"
      :color="entry?.tier?.toLowerCase()"
      :size="44"
      :style="{
        color: entry?.tier ? `var(--color-rank-light)` : `var(--color-p3)`,
      }"
      :ui="{
        ring: 'scale-111 text-pc drop-shadow-xs **:stroke-[6.9%]!',
        progress: cn('drop-shadow-sm!', {
          hidden: !entry?.win && !entry?.loss,
        }),
        root: 'absolute inset-0 z-3 size-max',
      }">
    </RadialWinrate>
  </div>
</template>
