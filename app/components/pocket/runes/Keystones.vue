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
    class="relative grid h-28 w-114 max-w-114 place-items-center overflow-hidden">
    <TabsList
      v-if="runes"
      base="indicator"
      mode="in-out"
      :duration="{ leave: 0, enter: 200 }"
      group
      :class="
        cn(
          'min-w-114  max-w-114 overflow-hidden  relative flex-nowrap  size-full  **:select-none',
          gridCols,
        )
      ">
      <TabsTrigger
        v-for="rune in runes"
        :key="rune.id"
        :title="rune.name"
        :value="rune.id"
        :class="
          cn(
            'rounded-full opacity-75  hover:opacity-100 hover:grayscale-0  place-self-center  group/r border-transparent relative cursor-pointer tldr-30  grid place-items-center shrink-0 size-22 aspect-square',
            { 'opacity-100  grayscale-0': set.keystone === rune.id },
          )
        ">
        <Img
          :img="`/img/runes/${set.primary.path}/${rune.id}.webp`"
          :alt="rune.name"
          class="drop-shadow-black/40 pointer-events-none absolute h-19 w-auto shrink-0 opacity-0 drop-shadow-sm transition-all duration-400 group-hover/r:opacity-90"
          :class="{ 'opacity-100 ': set.keystone === rune.id }" />

        <Img
          :img="`/img/runes/grayscale/${rune.id}.webp`"
          :alt="rune.name"
          class="pointer-events-none absolute h-19 w-auto shrink-0 opacity-100 brightness-90 contrast-150 drop-shadow-sm transition-all duration-400 group-hover/r:opacity-0"
          :class="{ 'opacity-0': set.keystone === rune.id }" />
      </TabsTrigger>

      <TabIndicator
        class="*:to-b1/40 mt-1"
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
