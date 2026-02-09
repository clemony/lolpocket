<script lang="ts" setup>
const {
  class: className,
  simple,
  stat,
  type,
} = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
  stat: StatDetail | StatDetail | PairedChampionStat
  type?: string
}>()
</script>

<template>
  <div
    :class="
      cn('group/wrap grid h-full items-center gap-1.5', {
        'grid-rows-[1fr_0.79fr]': !simple,
      })
    ">
    <div class="relative grid size-15 place-items-center">
      <slot />
      <WinrateIndicator
        v-if="!simple && stat?.games"
        :value="stat?.winrate ?? 0" />
    </div>

    <ChampStatValues
      v-if="!simple"
      :type
      :stat />
  </div>
</template>
