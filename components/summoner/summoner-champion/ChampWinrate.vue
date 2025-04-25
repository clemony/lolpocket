<script lang="ts" setup>
const props = defineProps<{
  champion: any
}>()

const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})
</script>

<template>
  <div class="relative size-18 grid place-items-center rounded-lg">
    <DonutSkeleton class="absolute size-18" />
    <div class="radial-progress opacity-94 dst absolute " :style="{ '--value': a, '--size': '4.45rem',  color: getColorFromVariable(`--color-${getAbsoluteColor(a)}`) }" role="progressbar">
      <span class="text-bc font-medium dst">
        {{ a.toFixed(1).replace('.0', '') }}%
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>