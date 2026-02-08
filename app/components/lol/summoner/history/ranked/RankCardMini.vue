<script setup lang="ts">
import { DataTooltip } from "#components"

const {
  title,
  class: className,
  entry,
} = defineProps<{
  entry: RankedEntry
  title?: string
  class?: HTMLAttributes["class"]
}>()

const winrate = computed(() =>
  entry ? (entry.wins / (entry.wins + entry.losses)) * 100 : 0
)

const payload = computed(() => {
  return {
    title:
      entry ? `${entry?.tier?.toLowerCase()} ${entry?.division}` : "Unranked",
    img: `/img/crests/mini/${entry?.tier?.toLowerCase() || "unranked"}.webp`,
    data: {
      lp: `${entry?.lp ?? 0} LP`,
      wins: `${entry ? entry.wins : 0}W  ${entry ? entry.losses : 0}L`,
      wr: `${winrate.value}% WR`,
    },
  }
})
</script>

<template>
  <!--   <Tooltip arrow :ui="{ content: 'max-w-32!' }" side="top" :content="h(DataTooltip, { payload })"> -->
  <Card
    :class="
      cn(
        'flex w-full flex-col items-center pt-1 ring-pc/60 select-none hover:ring',
        className
      )
    ">
    <span class="text-xs! font-bold">
      {{ title }}
    </span>

    <div class="-mt-2 -mb-1 grid place-items-center overflow-hidden">
      <!-- crest -->
      <img
        v-if="!entry"
        class="size-14 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-14 object-contain drop-shadow-sm drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />
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
          entry ?
            `${entry?.tier?.toLowerCase()} ${entry?.division}`
          : "Unranked"
        }}
      </span>
      <!--       <span class="text-2xs! font-semibold capitalize">
      </span> -->
      <span
        class="mt-px inline-flex gap-1 align-baseline text-2xs! text-nowrap decoration-dotted hover:underline"
        :data-type="`${entry ? entry?.wins + entry?.losses : 0} total`" />
    </div>
  </Card>
  <!--   </Tooltip> -->
</template>
