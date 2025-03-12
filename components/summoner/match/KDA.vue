<script lang="ts" setup>
const props = defineProps<{
  kills: number
  deaths: number
  assists: number
}>()

const math = computed (() => {
  return Math.round((props.kills + props.assists) / props.deaths * 100)
})
</script>

<template>
  <div class="grid h-full py-1 justify-items-start">
    <p class="text-4 flex gap-0.75 font-bold self-start">
      <span>{{ props.kills }}</span>
      <span class="font-mono ">/</span>
      <span class="text-red-700">{{ props.deaths }}</span>
      <span class="font-mono ">/</span>
      <span>{{ props.assists }}</span>
    </p>
    <p class="text-3 text-bc/80  self-end  font-medium ">
      {{ math / 100 }}:1 <span class="font-mono ">KDA</span>
    </p>
  </div>
</template>