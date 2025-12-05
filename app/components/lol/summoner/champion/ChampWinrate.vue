<script lang="ts" setup>
const props = defineProps<{
  champion: any
}>()

const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})
</script>

<template>
  <div class="relative grid size-14 place-items-center rounded-lg">
    <DonutSkeleton
      style="--thickness: 22%;"
      class="absolute size-[3rem]" />

    <div
      class="radial-progress absolute"
      :style="{
        '--value': a,
        '--size': '3rem',

        'color': getColorFromVariable(`--color-${getAbsoluteColor(a)}`),
      }"
      role="progressbar">
      <span class="text-0! font-medium text-bc dst">
        {{ a.toFixed(1).replace(".0", "") }}%
      </span>
    </div>
  </div>
</template>
