<script setup lang="ts">
const {
  title,
  class: className,
  entry,
} = defineProps<{
  entry: RankedEntry
  title?: string
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <UCard
    color="p1"
    :ui="{
      root: cn('h-36', className),
      body: ' place-items-center  h-36 grid grid-cols-[1.1fr_1fr_1fr]  w-full',
    }">
    <template #header>
      {{ `Ranked ${title}` }}
    </template>
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
      <ChampWinrate :entry class="size-21" hide-zero />
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
          entry ?
            `${entry?.tier?.toLowerCase()} ${entry?.division}`
            : "Unranked"
        }}
      </span>

      <span class="text-lg font-semibold capitalize">
        {{ entry?.lp ?? 0 }} LP
      </span>

      <span
        v-tippy="`${entry ? entry?.wins + entry?.losses : 0} total`"
        class="flex items-center justify-end gap-1 text-end text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
        <span>{{ entry ? entry.wins : 0 }}W</span>

        <span>{{ entry ? entry.losses : 0 }}L</span>
      </span>
    </div>
  </UCard>
</template>
