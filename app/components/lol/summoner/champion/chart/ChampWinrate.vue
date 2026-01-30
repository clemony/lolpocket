<script lang="ts" setup>
const props = defineProps<{
  champion: any
}>()

const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})
</script>

<template>
  <div class="relative grid size-14 shrink-0 place-items-center rounded-lg">
    <DonutSkeleton class="absolute size-12" style="--thickness: 22%" />

    <div
      class="radial-progress absolute"
      :style="{
        '--value': a,
        '--size': '3rem',

        'color': cssVar(
          `--color-${
            a >= 51 ? 'win'
            : a <= 49 ? 'domination'
              : 'silver'
          }`,
        ),
      }"
      role="progressbar"
    />
    <span class="text-xxs! text-bc dst absolute font-medium">
      {{ a.toFixed(1).replace(".0", "") }}
    </span>
  </div>
</template>
