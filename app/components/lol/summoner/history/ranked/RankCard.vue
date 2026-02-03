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
const colors = [cssVar('--color-b3'), color1.value]

const winrate = computed(() =>
  entry ? (entry.wins / (entry.wins + entry.losses)) * 100 : 0
)
</script>

<template>
  <UCard
    variant="field" :ui="{
      root: cn('h-36  ', className),
      body: ' place-items-center  h-36 grid grid-cols-[1.1fr_1fr_1fr]  w-full' }"
  >
    <template #header>
      {{ `Ranked ${title}` }}
    </template>
    <div class="mt-0.5 grid place-items-center overflow-hidden">
      <!-- crest -->
      <img
        v-if="!entry"
        class="size-24 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp"
      >

      <img
        v-else
        class="size-28 object-contain drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`"
      >
    </div>

    <div class="relative grid size-full place-items-center">
      <div
        class="relative grid size-21 place-items-center overflow-hidden rounded-lg"
      >
        <DonutSkeleton class="dst absolute size-21" />

        <div
          class="radial-progress dss absolute"
          :style="{
            '--value': winrate,
            '--size': '5.25rem',
            'color': cssVar(
              `--color-${entry?.tier ? entry.tier?.toLowerCase() : 'b3'}`,
            ),
          }"
          role="progressbar"
        >
          <span v-if="entry" class="text-bc dst font-medium">
            {{ winrate.toFixed(1).replace(".0", "") }}%
          </span>
        </div>
      </div>
    </div>

    <div
      :class="
        cn(
          'flex flex-col justify-between overflow-hidden py-3 text-end font-medium',
          { 'opacity-40': !entry },
        )
      "
    >
      <span class="capitalize">
        {{
          entry
            ? `${entry?.tier?.toLowerCase()} ${entry?.division}`
            : "Unranked"
        }}
      </span>

      <span class="text-lg font-semibold capitalize">
        {{ entry?.lp ?? 0 }} LP
      </span>

      <span
        v-tippy="`${entry ? entry?.wins + entry?.losses : 0} total`"
        class="flex items-center justify-end gap-1 text-end text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline"
      >
        <span>{{ entry ? entry.wins : 0 }}W</span>

        <span>{{ entry ? entry.losses : 0 }}L</span>
      </span>
    </div>
  </UCard>
</template>
