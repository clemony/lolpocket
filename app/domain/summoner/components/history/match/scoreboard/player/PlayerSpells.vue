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
  <div
    :class="
      cn(
        'pointer-events-none relative z-auto flex shrink-0 items-center *:pointer-events-auto',
        className
      )
    ">
    <HoverAvatar
      v-for="spell in player?.spells.toReversed()"
      :key="spell"
      :src="`/img/spell/${spell}.webp`"
      :size
      :avatar="{
        ui: {
          root: cn('z-2', ui?.root),
          image: cn('', ui?.image),
        },
      }"
      type="spell" />
  </div>
</template>
