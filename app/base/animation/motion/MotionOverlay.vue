<script lang="ts" setup>
import { motion } from 'motion-v'

const { show } = defineProps<{
  show: boolean
}>()
</script>

<template>
  <Teleport
    v-show="show"
    :disabled="!show"
    to="body">
    <motion.div
      v-show="show"
      class="fixed size-full z-49 bg-black/40 top-0 left-0 pointer-events-none" />
  </Teleport>
</template>
