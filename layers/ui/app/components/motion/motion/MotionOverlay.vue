<script lang="ts" setup>
import { motion } from 'motion-v'

const { show } = defineProps<{
  show: boolean
}>()
</script>

<template>
  <Teleport v-show="show" :disabled="!show" to="body">
    <motion.div
      v-show="show"
      class="pointer-events-none fixed top-0 left-0 z-49 size-full bg-black/40"
    />
  </Teleport>
</template>
