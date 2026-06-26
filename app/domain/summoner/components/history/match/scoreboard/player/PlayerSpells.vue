<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"

const {
  class: className,
  player,
  ui,
  size = "sm",
} = defineProps<{
  player: Player
  class?: HTMLAttributes["class"]
  size?: AvatarProps["size"]
  ui?: AvatarProps["ui"]
}>()
</script>

<template>
  <UAvatarGroup
    class=""
    :ui="{
      root: cn('relative shrink-0 flex-col -space-y-0.25', className),
    }">
    <HoverIcon
      v-for="spell in player?.spells.toReversed()"
      :id="spell"
      :key="spell"
      :size
      round
      :avatar="{
        ui: {
          ...ui,
          image: cn(
            'ring ring-transparent ring-offset-3 ring-offset-p1 drop-shadow-none',
            ui?.image
          ),
        },
      }"
      type="spell" />
  </UAvatarGroup>
</template>
