<script lang="ts" setup>
const { player, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
}>()
  console.log("💠 - player:", player.puuid)

const math = computed (() => {
  return Math.round((player.kills + player.assists) / player.deaths * 100)
})
</script>

<template>
  <div class="" :class="cn(' grid grid-cols-2 items-center  *:tracking-tight max-w-32 w-32   p-1  ', className)">

    <div class="grid size-full">
    <p class="text-1 grid items-start font-bold grid   justify-start tracking-tight text-nowrap inline-flex flex-nowrap">
      {{ player.kills }}
      <icon name="slash" class="-mx-px dst  size-3" />
      {{ player.deaths }}
      <icon name="slash" class="-mx-px dst  size-3" />
      {{ player.assists }}
    </p>

    <p>
      <slot  />
    </p>
</div>
<div class="grid size-full  justify-items-end">
    <p :class="cn('!text-1 flex gap-1 text-bc/80 text-nowrap leading-3 truncate font-medium ', {'rounded-full bg-gold -mt-1 mb-1 px-2 inset-shadow-xs items-center font-normal text-white  dst': math / 100 == Infinity})">
<icon  v-if="math / 100 == Infinity"  name="fa6-solid:infinity" class="text-white  size-3.5 dst"/>
    <span v-else>
      {{ math / 100 }}&nbsp;
    </span>
    <span :class="{'mb-px': math / 100 == Infinity}">
    kda
    </span>
    </p>
      <p class="text-bc/80  truncate font-medium  tracking-tight !text-1  leading-4  ">
        {{ Math.round(player.challenges.killParticipation * 100) }}% &nbsp;kp</p>
  </div>
  </div>
</template>
