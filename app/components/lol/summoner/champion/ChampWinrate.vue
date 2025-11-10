<script lang="ts" setup>
const props = defineProps<{
  champion: any
}>()

const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})
</script>

<template>
  <div class="relative grid size-15 place-items-center rounded-lg">
    <DonutSkeleton class="absolute size-15" />

    <div
      class="radial-progress absolute"
      :style="{
        '--value': a,
        '--size': '3.65rem',
        'color': getColorFromVariable(`--color-${getAbsoluteColor(a)}`),
      }"
      role="progressbar">
      <span class="!text-1 font-medium text-bc dst">
        {{ a.toFixed(1).replace(".0", "") }}%
      </span>
    </div>
  </div>
</template>

<style scoped></style>
