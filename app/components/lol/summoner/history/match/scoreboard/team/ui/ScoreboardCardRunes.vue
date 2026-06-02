<script lang="ts" setup>
import Path from "~/components/icon/Path.vue"

const { player, classes } = defineProps<{
  player: Player
  classes?: HTMLAttributes["class"]
}>()
</script>

<template>
  <!-- runes -->
  <UAvatarGroup
    :ui="{
      root: 'pointer-events-none z-1 flex h-full translate-x-1.25 flex-col justify-center *:pointer-events-auto'
    }">
    <!-- keystone -->
    <HoverIcon
      :id="player?.runes?.keystone"
      type="keystone"
      size="2xs"
      :ui="{
        root: cn('bg-neutral', classes)
      }" />

    <!-- path -->

    <HoverIcon
      :id="player?.runes?.secondary?.path"
      type="path"
      size="2xs"
      class="bg-neutral" />
  </UAvatarGroup>
</template>
