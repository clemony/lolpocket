<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('size-full absolute top-0 left-0 object-cover', props.class)">
    <video-background
      src="/video/sparkles.webm"
      class="size-full object-cover aspect-square"></video-background>
  </div>
</template>