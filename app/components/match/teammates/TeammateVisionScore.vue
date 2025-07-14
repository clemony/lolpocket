<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div v-tippy="'Wards Placed/Killed'" :class="cn('flex *:w-full *:items-end flex-col items-end group/v *:tracking-tight max-w-12 w-12   p-1 mr-4  ', className)">
    <p class="text-1  font-semibold  truncate justify-end text-nowrap flex gap-1 flex-nowrap items-center">
      <i-roles-support class="size-3.5 dst text-bc" />
      {{ player.visionScore }}
    </p>

    <p class="text-1 mt-2.25 group-hover/v:underline text-bc/60 text-nowrap flex justify-end truncate font-medium ">
      {{ `${player.wardsPlaced}/${player.wardsKilled}` }}
    </p>
  </div>
</template>