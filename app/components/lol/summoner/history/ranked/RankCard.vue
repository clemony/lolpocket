<script setup lang="ts">
const {
  title,
  class: className,
  entry,
} = defineProps<{
  entry: RankedEntry | undefined
  title?: string
  class?: HTMLAttributes["class"]
}>()

const data = computed(() => {
  if (!entry) return
  return [entry.win ?? 0, entry.loss ?? 0]
})
</script>

<template>
  <UCard
    legend
    :ui="{
      root: cn('relative h-36 overflow-visible', className),
      body: 'grid h-36 w-full grid-cols-[1.1fr_1fr_1fr] place-items-center',
    }">
    <span
      class="field-legend absolute translate-x-3 -translate-y-2.5 place-self-start text-sm font-medium">
      {{ `Ranked ${title}` }}
    </span>
    <div class="mt-0.5 grid place-items-center overflow-hidden">
      <!-- crest -->
      <img
        v-if="!entry"
        class="size-24 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-28 object-contain drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />
    </div>

    <div class="relative grid size-full place-items-center">
      <ChampWinrate v-if="entry" :entry :size="60" />
      <DonutSkeleton v-else class="size-21" />
    </div>

    <div
      :class="
        cn(
          'flex flex-col justify-between overflow-hidden py-3 text-end font-medium',
          { 'opacity-40': !entry }
        )
      ">
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

      <Tooltip
        label="`${entry ? entry?.win + entry?.loss : 0} total`"
        class="flex items-center justify-end gap-1 text-end text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
        <span>{{ entry ? entry.win : 0 }}W</span>

        <span>{{ entry ? entry.loss : 0 }}L</span>
      </Tooltip>
    </div>
  </UCard>
</template>
