<script lang="ts" setup>
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
    class="w-114 h-28 w-114 max-w-114 relative grid place-items-center overflow-hidden">
    <IndicatorTabsList
      v-if="runes"
      mode="in-out"
      :duration="{ leave: 0, enter: 200 }"
      group
      :class="
        cn(
          'min-w-114  max-w-114 overflow-hidden  relative flex-nowrap  size-full  **:select-none',
          gridCols,
        )
      ">
      <IndicatorTabsTrigger
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
          class="absolute drop-shadow-sm drop-shadow-black/40 pointer-events-none opacity-0 group-hover/r:opacity-90 duration-400 transition-all shrink-0 h-19 w-auto"
          :class="{ 'opacity-100 ': set.keystone === rune.id }" />

        <Img
          :img="`/img/runes/grayscale/${rune.id}.webp`"
          :alt="rune.name"
          class="h-19 w-auto pointer-events-none drop-shadow-sm shrink-0 absolute contrast-150 brightness-90 opacity-100 group-hover/r:opacity-0 duration-400 transition-all"
          :class="{ 'opacity-0': set.keystone === rune.id }" />
      </IndicatorTabsTrigger>

      <TabIndicator
        class="*:to-b1/40 mt-1"
        round />
    </IndicatorTabsList>

    <div
      v-else
      class="size-full grid grid-cols-3 py-4">
      <Placeholder
        v-for="i in 3"
        :key="i"
        class="size-18 rounded-full place-self-center" />
    </div>
  </Tabs>
</template>
