<script setup lang="ts">
import { romanNumeral } from "~~/layers/lib/shared/utils/format"

const { entry, class: className } = defineProps<{
  entry?: RankedEntry | Partial<RankedEntry>
  class?: HTMLAttributes["class"]
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
  <UTooltip
    as="label"
    :disable-hoverable-content="true"
    :content="{ side: 'top' }"
    :ui="{
      arrow: 'h-2! w-4! fill-overlay stroke-p3',
      content:
        'pointer-events-none z-1 grid h-max! justify-center rounded-4xl bg-overlay px-10 text-pc shadow-lg! ring-p2 drop-shadow-md before:absolute before:inset-0 before:z-0 before:size-full before:-scale-y-100 before:rounded-4xl before:shadow-sm before:shadow-black/5',
    }">
    <div
      :style="{
        '--color-rank': `var(--color-${entry?.tier?.toLowerCase()})`,
        '--color-rank-light': `color-mix(in oklab, var(--color-p0) 80%, var(--color-${entry?.tier?.toLowerCase()}) 20%)`,
      }"
      :class="
        cn(
          'group/rank relative z-3 grid aspect-square w-full place-items-center rounded-full',
          className
        )
      ">
      <!-- CREST -->
      <div
        class="absolute inset-0 z-1 grid size-full place-items-center overflow-hidden p-6">
        <img
          v-if="!entry?.tier"
          class="size-full scale-90 object-contain opacity-40 drop-shadow-sm saturate-0"
          alt="unranked"
          src="/img/crests/unranked.webp" />

        <img
          v-else
          class="size-full object-contain contrast-85 drop-shadow-md drop-shadow-black/30"
          :alt="entry?.tier?.toLowerCase()"
          :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />

        <div
          :class="
            cn(
              'absolute top-1/4 inline-flex items-center gap-0.5 text-3xs font-semibold text-(--color-rank)/80 uppercase',
              {
                'text-pc/30': !entry?.tier,
                'font-bold brightness-90': entry?.tier,
              }
            )
          ">
          {{ entry?.label && entry?.label.replace("/", "&thinsp;/&thinsp;") }}
          <Icon
            name="i-info"
            :class="
              cn(
                'inline size-3.5 -translate-y-[1px] rounded-full antialiased opacity-60 **:text-(--color-rank)! group-hover/rank:opacity-80',
                {
                  'text-pc/30': !entry?.tier,
                }
              )
            " />
        </div>
      </div>

      <!--
    CHART -->
      <RadialWinrate
        v-if="entry"
        :winrate="false"
        :thickness="11"
        size="100%"
        :entry="asEntry(entry)"
        :aria-label="`Winrate for ${entry?.tier?.toLowerCase()}`"
        :color="entry?.tier?.toLowerCase()"
        :style="{
          color: entry?.tier ? `var(--color-rank-light)` : `var(--color-p3)`,
        }"
        :ui="{
          ring: 'inset-0 z-0! size-full! scale-111 text-pc drop-shadow-xs **:stroke-[6.9%]!',
          progress: cn('inset-0 z-2! size-full! grow drop-shadow-sm!', {
            hidden: !entry?.win && !entry?.loss,
          }),
          root: 'inset-0 z-3 size-full grow',
        }">
      </RadialWinrate>
    </div>
    <template #content>
      <div class="grid place-items-center">
        <div
          class="grid grid-rows-[1.4fr_1fr_1fr] items-center justify-center gap-1 px-3 pt-2.5 pb-1.5">
          <div
            class="flex flex-col items-center gap-1 text-3xs leading-none font-medium">
            <div class="text-2xs font-medium text-pc/60">
              {{ entry?.label }}
            </div>
            <span
              :class="
                cn('text-2xs font-semibold tabular-nums', {
                  'font-mono': entry?.tier,
                })
              ">
              <span v-if="entry?.tier">
                {{ entry?.tier }}
                {{ entry?.division }}
              </span>
              <template v-else
                >{{ (entry?.win || 0) + (entry?.loss || 0) }} played</template
              >
            </span>
            <!-- LP -->
            <span v-if="entry?.lp" class="text-3xs text-pc/60 tabular-nums">
              {{ entry?.lp }}&thinsp;LP
            </span>
          </div>
          <!-- WINRATE -->
          <h2
            :class="
              cn('justify-self-center text-center leading-none', {
                'font-mono text-xl font-semibold': !entry?.tier,
              })
            ">
            {{ wr && entry?.tier ? `${wr}%` : "Unranked" }}
          </h2>
          <div
            class="flex flex-col items-center gap-1 text-3xs leading-none font-medium tabular-nums">
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
    </template>
  </UTooltip>
</template>
