<script setup lang="ts">
const {
  title,
  class: className,
  entry,
} = defineProps<{
  entry: RankedEntry
  title?: string
  class?: HTMLAttributes['class']
}>()

const color1 = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--color-${entry?.tier ?? 'b3'}`
  )
})
const colors = [getColorFromVariable('--color-b3'), color1.value]

const winrate = computed(() =>
  entry ? (entry.wins / (entry.wins + entry.losses)) * 100 : 0
)
</script>

<template>
  <div
    :class="
      cn(
        'w-120 max-w-120 h-42 max-h-42 field-box  bg-b2/30 shadow-warm-soft  drop-shadow-xs border-b3/40 py-0 ',
        className,
      )
    ">
    <span class="field-legend">
      {{ `Ranked ${title}` }}
    </span>
    <div
      class="overflow-hidden size-full grid grid-cols-[1.1fr_1fr_1fr] place-items-center h-42 content-center">
      <div class="grid mt-0.5 overflow-hidden place-items-center">
        <!-- crest -->
        <img
          v-if="!entry"
          src="/img/crests/unranked.webp"
          class="drop-shadow-sm object-contain opacity-40 size-25 saturate-0" />

        <img
          v-else
          :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`"
          class="drop-shadow-md object-contain size-28 drop-shadow-black/30" />
      </div>

      <div class="relative grid place-items-center size-full">
        <div
          class="relative size-21 overflow-hidden mt-1 grid place-items-center rounded-lg">
          <DonutSkeleton class="absolute size-21" />

          <div
            class="radial-progress dst absolute"
            :style="{
              '--value': winrate,
              '--size': '5.25rem',
              'color': getColorFromVariable(
                `--color-${entry?.tier ? entry.tier?.toLowerCase() : 'b3'}`,
              ),
            }"
            role="progressbar">
            <span
              v-if="entry"
              class="text-bc font-medium dst">
              {{ winrate.toFixed(1).replace(".0", "") }}%
            </span>
          </div>
        </div>
      </div>

      <div
        :class="
          cn(
            'pt-3  overflow-hidden font-medium flex flex-col items-end justify-center pb-3 text-end gap-2.75',
            { 'opacity-40': !entry },
          )
        ">
        <p class="capitalize">
          {{
            entry
              ? `${entry?.tier?.toLowerCase()} ${entry?.division}`
              : "Unranked"
          }}
        </p>

        <p class="capitalize font-semibold text-md">
          {{ entry?.lp ?? 0 }} LP
        </p>

        <p
          v-tippy="`${entry ? entry?.wins + entry?.losses : 0} total`"
          class="hover:underline decoration-dotted underline-offset-2 flex text-xxs items-center gap-1 text-end justify-end text-nowrap">
          <span>{{ entry ? entry.wins : 0 }}W</span>

          <span>{{ entry ? entry.losses : 0 }}L</span>
        </p>
      </div>
    </div>
  </div>
</template>
