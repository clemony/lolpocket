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
    <!--    <Progress class=" w-32 h-8 rounded-lg  bg-domination  shadow-xxs *:bg-inspiration" :model-value="a" :max="100">
    </Progress>
    <div
      class="absolute size-full top-1.5  text-white font-medium"
      :style="{
        transform: `translateX(${a > 40 ? (a / 2) - 10 : (a / 20) + 40}%)`,
      }">
      {{ a.toFixed(1).replace('.0', '') }}%
    </div> -->

    <DonutSkeleton class="absolute size-18" />
    <div class="radial-progress dst absolute text-inspiration" :style="{ '--value': a, '--size': '4.45rem' }" role="progressbar">
      <span class="text-bc font-medium dst">
        {{ a.toFixed(1).replace('.0', '') }}%
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>