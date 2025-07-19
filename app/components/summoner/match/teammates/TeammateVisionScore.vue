<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex *:w-full  h-full  grid items-center group/v *:tracking-tight max-w-14 w-14 gap-2 *:text-1 py-1.5 *:leading-none  mr-4  ', className)">
    <p v-tippy="'Vision Score'" class=" font-semibold  truncate justify-end text-nowrap flex gap-1 flex-nowrap items-center">
      <i-roles-support class="size-3.5 dst text-bc" />
      {{ player.visionScore }}
    </p>

    <div class="flex flex-nowrap gap-1 flex justify-end grow ">
      <Badge size="xs" class="bg-precision/30 border-precision/80 text-1  saturate-180   ">
        {{ player.wardsPlaced }}
      </Badge>

      <Badge size="xs" class="bg-domination/20 border-domination/40 saturate-180  text-1">
        {{ player.challenges.controlWardsPlaced }}
      </Badge>
    </div>
  </div>
</template>