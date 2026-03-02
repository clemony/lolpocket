<script lang="ts" setup>
import Path from "~/components/common/icon/Path.vue"

const { player } = defineProps<{
  player: Player
}>()
</script>

<template>
  <!-- runes -->
  <div
    class="pointer-events-none z-1 flex h-full translate-x-1.25 flex-col items-center gap-px *:pointer-events-auto">
    <!-- keystone -->
    <Keystone
      :id="player?.runes?.keystone"
      class="transition-scale size-4.5 rounded-full bg-neutral duration-300 *:scale-110 hover:scale-130" />

    <!-- path -->

    <Path
      :id="player?.runes?.secondary?.path"
      class="transition-scale size-4.5 rounded-full bg-neutral duration-300 *:size-4 hover:scale-130" />
  </div>
</template>
