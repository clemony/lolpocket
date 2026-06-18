<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <UAvatarGroup
    class=""
    :ui="{
      root: cn('shrink-0 flex-col -space-y-0.25', className)
    }">
    <HoverIcon
      v-for="spell in player?.spells.toReversed()"
      :id="spell"
      :key="spell"
      size="sm"
      round
      :avatar="{
        ui: {
          image:
            'ring ring-transparent ring-offset-3 ring-offset-p1 drop-shadow-none'
        }
      }"
      type="spell" />
  </UAvatarGroup>
</template>
