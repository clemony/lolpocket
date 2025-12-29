<script lang="ts" setup>
const { class: className, simple, stat } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
  stat: StatDetail
}>()
</script>

<template>
  <div
    :class="cn('grid h-full items-center gap-1.5', { ' grid-rows-[1fr_0.79fr]': !simple })">
    <div class="relative grid size-15 place-items-center">
      <slot />
      <WinrateIndicator
        v-if="!simple && stat?.games"
        :value="stat?.winrate" />
    </div>

    <ChampStatValues
      v-if="!simple"
      :stat />
  </div>
</template>