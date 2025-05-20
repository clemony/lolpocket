<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()

const player = computed (() => {
  return props.player
})
const math = computed (() => {
  return Math.round((player.value.kills + player.value.assists) / player.value.deaths * 100)
})
</script>

<template>
  <div class="" :class="cn('flex max-w-32 min-w-32 flex-col py-1 ml-4 items-start ', props.class)">
    <p class="text-4 grid items-start font-semibold grid   justify-start tracking-wider text-nowrap inline-flex flex-nowrap">
      {{ player.kills }}/<span class="text-domination">{{ player.deaths }}/</span>{{ player.assists }}
    </p>

    <p class="text-1 text-bc/80 text-nowrap mt-3 truncate font-medium ">
      {{ Math.round(player.challenges.killParticipation * 100) }}% <span class=""> KP</span>
    </p>

    <p class="text-1 text-bc/80 text-nowrap  truncate font-medium ">
      <span v-if="!player.deaths" class="tracking-tight mr-0.5">PERFECT</span>
      <span v-else>{{ math / 100 }}:1 </span>
      <span class=" contents">KDA</span>
    </p>
  </div>
</template>