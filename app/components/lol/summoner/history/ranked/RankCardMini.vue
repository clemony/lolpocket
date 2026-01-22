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

const winrate = computed(() =>
  entry ? (entry.wins / (entry.wins + entry.losses)) * 100 : 0,
)

const payload = computed (() => {
  return {
    title: entry ? `${entry?.tier?.toLowerCase()} ${entry?.division}` : 'Unranked',
    data: {
      lp: `${entry?.lp ?? 0} LP`,
      wins: `${entry ? entry.wins : 0}W  ${entry ? entry.losses : 0}L`,
      wr: `${winrate.value}% WR`
    },
    img: `/img/crests/mini/${entry?.tier?.toLowerCase() || 'unranked'}.webp`
  }
})
</script>

<template>
  <UTooltip
    arrow
    variant="neutral"
    :content="{ side: 'top' }">
    <Card
      :class="
        cn('flex w-full flex-col items-center pt-1 ring-bc/60 select-none hover:ring', className) ">
      <span class="text-xs! font-bold">
        {{ title }}
      </span>

      <div class="-mt-2 -mb-1 grid place-items-center overflow-hidden">
        <!-- crest -->
        <img
          v-if="!entry"
          alt="unranked"
          src="/img/crests/unranked.webp"
          class="size-14 object-contain opacity-40 drop-shadow-sm saturate-0" />

        <img
          v-else
          :alt="entry?.tier?.toLowerCase()"
          :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`"
          class="size-14 object-contain drop-shadow-sm drop-shadow-black/30" />
      </div>

      <div
        :class="
          cn('flex w-full flex-col items-center justify-center gap-px overflow-hidden px-2 pb-2 **:leading-4 **:font-medium', { 'opacity-40': !entry }) ">
        <span class="text-xs! font-semibold capitalize">
          {{ entry ? `${entry?.tier?.toLowerCase()} ${entry?.division}` : "Unranked" }}
        </span>
        <!--       <span class="text-xxs! font-semibold capitalize">
      </span> -->
        <span
          :data-type="`${entry ? entry?.wins + entry?.losses : 0} total`"
          class="text-xxs! mt-px inline-flex gap-1 align-baseline text-nowrap decoration-dotted hover:underline">

        </span>
      </div>
    </Card>
    <template #content>
      <DataTooltip :payload />
    </template>
  </UTooltip>
</template>
