<script lang="ts" setup>
const { player, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
}>()
console.log('💠 - player:', player.puuid)

const math = computed (() => {
  return Math.round((player.kills + player.assists) / player.deaths * 100)
})
</script>

<template>
  <div :class="cn(' h-full gap-2  grid items-center justify-items-end *:tracking-tight  max-w-18 w-18  **:text-1 py-2 ', className)">
    <Badge v-if=" math / 100 == Infinity " size="xs" class="border-master/40  saturate-180 bg-master/20 text-0 **:leading-0">
      <icon name="fa6-solid:infinity" class="size-3.5 dst mt-[0.04em]" />
      kda
    </Badge>

    <p v-else :class="cn(' flex gap-1 dst text-bc/80 text-nowrap leading-3 truncate font-medium ')">
      {{ math / 100 }}&nbsp;
      kda
    </p>

    <p class="text-bc/80  truncate font-medium  tracking-tight !text-1   ">
      {{ Math.round(player.challenges.killParticipation * 100) }}% &nbsp;kp
    </p>
  </div>
</template>
