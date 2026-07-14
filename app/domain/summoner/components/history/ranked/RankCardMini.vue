<script setup lang="ts">
import { DataTooltip } from "#components"

const {
  title,
  class: className,
  entry,
} = defineProps<{
  entry?: RankedEntry
  title?: string
  class?: HTMLAttributes["class"]
}>()

const winrate = computed(() =>
  entry ? (entry.win / (entry.win + entry.loss)) * 100 : 0
)
</script>

<template>
  <Tooltip
    arrow
    :content="{ side: 'top' }"
    :ui="{ content: 'flex h-max! max-w-32! flex-col items-center' }">
    <label
      class="grid place-items-center rounded-5xl p-1 ring-p3 select-none hover:bg-p1 hover:ring"
      :aria-label="`${title} rank: ${entry?.tier?.toLowerCase()} ${entry?.division}`">
      <!-- crest -->
      <img
        :class="
          cn('size-8 object-contain drop-shadow-xs drop-shadow-black/10', {
            'opacity-40': !entry?.tier,
          })
        "
        :alt="entry?.tier?.toLowerCase()"
        :src="
          entry?.tier
            ? `/img/crests/mini/${entry?.tier?.toLowerCase()}.webp`
            : '/img/crests/mini/unranked.webp'
        " />
    </label>
    <template #content>
      <span class="mt-1 text-2xs! leading-none font-medium uppercase">
        {{ title }}
      </span>

      <div class="grid place-items-center overflow-hidden">
        <!-- crest -->
        <img
          :class="
            cn('size-8 object-contain drop-shadow-xs drop-shadow-black/10', {
              'opacity-40': !entry?.tier,
            })
          "
          :alt="entry?.tier?.toLowerCase()"
          :src="
            entry?.tier
              ? `/img/crests/mini/${entry?.tier?.toLowerCase()}.webp`
              : '/img/crests/mini/unranked.webp'
          " />
      </div>
      <div
        :class="
          cn(
            'flex w-full flex-col items-center justify-center gap-px overflow-hidden px-2 pb-2 **:leading-4 **:font-medium',
            { 'opacity-40': !entry }
          )
        ">
        <span class="text-xs! font-semibold capitalize">
          {{
            entry
              ? `${entry?.tier?.toLowerCase()} ${entry?.division}`
              : "Unranked"
          }}
        </span>
        <!--       <span class="text-2xs! font-semibold capitalize">
        </span> -->
        <span
          class="mt-px inline-flex gap-1 align-baseline text-2xs! text-nowrap decoration-dotted hover:underline"
          :data-type="`${entry ? entry?.win + entry?.loss : 0} total`" />
      </div>
    </template>
  </Tooltip>
</template>
