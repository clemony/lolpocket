<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  player: any
}>()

const player = computed (() => {
return props.player
})
const math = computed (() => {
  return Math.round((player.value.kills + player.value.assists) / player.value.deaths * 100)
})

</script>

<template>
  <div class="" :class="cn('  *:tracking-tight max-w-32 w-32   p-1  ', props.class)">
    <p class="text-1  font-semibold flex flex-nowrap  truncate ws-nowrap  text-nowrap *:text-nowrap ">
      {{ player.kills }}/{{ player.deaths }}/{{ player.assists }}
      
      <span class="text-bc/60 text tracking-tight"> 
      ({{Math.round(player.challenges.killParticipation * 100)}}% <span class="font-mono"> KP</span>)</span>
    </p>
    <p class="text-1 mt-2.25 text-bc/60 text-nowrap  truncate font-medium ">
      {{ math / 100 }}:1 <span class="font-mono contents">KDA</span>
    </p>
  </div>
</template>