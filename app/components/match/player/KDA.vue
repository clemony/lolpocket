<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const math = computed (() => {
  return Math.round((player.kills + player.assists) / player.deaths * 100)
})
/* aspect-square btn !bg-b1/84  inset-shadow-xs size-10 bg-linear-to-t shadow-sm drop-shadow-sm inset-shadow-xs */
const statBadgeStyle = 'flex  leading-4 items-end  tracking-tight  font-medium text-1 rounded-md relative '
const badgeLabelStyle = ' text-2 tracking-wide flex mb-px   text-nowrap !text-00  text-shadow-xs  text-end lowercase   font-normal '

</script>

<template>
  <div
    class="flex w-25  gap-1 grid auto-rows-max *:w-full justify-start *:justify-start py-1 ml-2 items-center *:items-center *:justify-items-start">
    <p class="text-5 grid items-center font-bold grid   justify-start tracking-tight text-nowrap inline-flex flex-nowrap">
      {{ player.kills }}
      <icon name="slash" class="-mx-px dst" />
      {{ player.deaths }}
      <icon name="slash" class="-mx-px dst" />
      {{ player.assists }}
    </p>
<div class="grid size-ful gap-0 ">
    <div  :class="cn(statBadgeStyle)">
        {{ Math.round(player.challenges.killParticipation * 100) }}
      <p :class="badgeLabelStyle">% KP</p>


    </div>

    <div v-if="!player.deaths" class=" text-nowrap tracking-tight  truncate font-bold ">
      PERFECT KDA
    </div>

    <div v-else  :class="cn(statBadgeStyle)">
        {{ (math / 100).toFixed(1) }}
      <p :class="badgeLabelStyle">&nbsp;KDA</p>

    </div>
    </div>
  </div>
</template>