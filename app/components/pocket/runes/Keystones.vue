<script lang="ts" setup>
import type { Pocket, RuneSet } from '~~/shared/schema'

const {
  pocket,
  runes,
  set: s,
} = defineProps<{
  runes: RuneMin[]
  set: RuneSet
  pocket: Pocket
}>()
const set = computed(() => s)

const gridCols = computed(() => `grid-cols-${runes.length ?? 3}`)
</script>

<template>
  <Tabs
    v-model="set.keystone"
    as="div"
    class="
      relative grid h-28 w-114 max-w-114 place-items-center overflow-hidden
    ">
    <TabsList
      v-if="runes"

      mode="in-out"
      :duration="{ leave: 0, enter: 200 }"
      group
      :class="
        cn('relative size-full max-w-114 min-w-114 flex-nowrap overflow-hidden **:select-none',
           gridCols,
        )
      ">
      <TabsTrigger
        v-for="rune in runes"
        :key="rune.id"
        :title="rune.name"
        :value="rune.id"
        :class="
          cn('group/r tldr-30 relative grid aspect-square size-22 shrink-0 cursor-pointer place-items-center place-self-center rounded-full border-transparent opacity-75 hover:opacity-100 hover:grayscale-0',
             { 'opacity-100  grayscale-0': set.keystone === rune.id },
          )
        ">
        <Img
          :src="`/img/runes/${set.primary.path}/${rune.id}.webp`"
          :alt="rune.name"
          class="
            pointer-events-none absolute h-19 w-auto shrink-0 opacity-0
            drop-shadow-sm drop-shadow-black/40 transition-all duration-400
            group-hover/r:opacity-90
          "
          :class="{ 'opacity-100': set.keystone === rune.id }" />

        <Img
          :src="`/img/runes/grayscale/${rune.id}.webp`"
          :alt="rune.name"
          class="
            pointer-events-none absolute h-19 w-auto shrink-0 opacity-100
            brightness-90 contrast-150 drop-shadow-sm transition-all
            duration-400 group-hover/r:opacity-0
          "
          :class="{ 'opacity-0': set.keystone === rune.id }" />
      </TabsTrigger>

      <TabIndicator
        class="mt-1 *:to-b1/40"
        round />
    </TabsList>

    <div
      v-else
      class="grid size-full grid-cols-3 py-4">
      <Placeholder
        v-for="i in 3"
        :key="i"
        class="size-18 place-self-center rounded-full" />
    </div>
  </Tabs>
</template>
