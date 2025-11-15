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
    `--color-${entry?.tier ?? 'b3'}`,
  )
})
const colors = [getColorFromVariable('--color-b3'), color1.value]

const winrate = computed(() =>
  entry ? (entry.wins / (entry.wins + entry.losses)) * 100 : 0,
)
</script>

<template>
  <div
    :class="
      cn(
        `
          field-box h-42 max-h-42 w-120 max-w-120 border-b3/40 bg-b2/30 py-0
          shadow-warm-soft drop-shadow-xs
        `,
        className,
      )
    ">
    <span class="field-legend">
      {{ `Ranked ${title}` }}
    </span>
    <div
      class="
        grid size-full h-42 grid-cols-[1.1fr_1fr_1fr] place-items-center
        content-center overflow-hidden
      ">
      <div class="mt-0.5 grid place-items-center overflow-hidden">
        <!-- crest -->
        <img
          v-if="!entry"
          alt="unranked"
          src="/img/crests/unranked.webp"
          class="size-25 object-contain opacity-40 drop-shadow-sm saturate-0" />

        <img
          v-else
          :alt="entry?.tier?.toLowerCase()"
          :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`"
          class="size-28 object-contain drop-shadow-md drop-shadow-black/30" />
      </div>

      <div class="relative grid size-full place-items-center">
        <div
          class="
            relative mt-1 grid size-21 place-items-center overflow-hidden
            rounded-lg
          ">
          <DonutSkeleton class="absolute size-21" />

          <div
            class="radial-progress absolute dst"
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
              class="font-medium text-bc dst">
              {{ winrate.toFixed(1).replace(".0", "") }}%
            </span>
          </div>
        </div>
      </div>

      <div
        :class="
          cn(
            `
              flex flex-col items-end justify-center gap-2.75 overflow-hidden
              pt-3 pb-3 text-end font-medium
            `,
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

        <p class="text-4 font-semibold capitalize">
          {{ entry?.lp ?? 0 }} LP
        </p>

        <p
          v-tippy="`${entry ? entry?.wins + entry?.losses : 0} total`"
          class="
            flex items-center justify-end gap-1 text-end text-1 text-nowrap
            decoration-dotted underline-offset-2
            hover:underline
          ">
          <span>{{ entry ? entry.wins : 0 }}W</span>

          <span>{{ entry ? entry.losses : 0 }}L</span>
        </p>
      </div>
    </div>
  </div>
</template>
