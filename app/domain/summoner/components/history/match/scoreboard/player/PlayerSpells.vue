<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"

const {
  class: className,
  player,
  ui,
  size = "2xs",
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
        'pointer-events-none relative z-1 flex shrink-0 items-center *:pointer-events-auto',
        className
      )
    ">
    <Tooltip :text="String('hi')">
      <UAvatar
        v-for="spell in player?.spells"
        :key="spell"
        :src="`/img/spell/${spell}.webp`"
        :size
        :ui="{
          root: cn('z-0', ui?.root),
          image: cn('z-1 ring-2! ring-p0!', ui?.image),
        }"
        type="spell" />
    </Tooltip>
  </div>
</template>
