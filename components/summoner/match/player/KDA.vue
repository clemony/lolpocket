<script lang="ts" setup>
const props = defineProps<{
  kills: number
  deaths: number
  assists: number
  class?: HTMLAttributes['class']
}>()

const math = computed (() => {
  return Math.round((props.kills + props.assists) / props.deaths * 100)
})
</script>

<template>
  <div class="" :class="cn('grid h-full justify-items-start items-center', props.class)">
    <p class="text-4 flex font-semibold self-start tracking-wide">
      <span>{{ props.kills }}</span>/<span class="text-red-700">{{ props.deaths }}</span>/<span>{{ props.assists }}</span>
    </p>
    <p class="text-3 text-bc/80  self-end  font-medium ">
      {{ math / 100 }}:1 <span class="font-mono ">KDA</span>
    </p>
  </div>
</template>