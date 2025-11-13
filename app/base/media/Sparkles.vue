<script lang="ts" setup>
import { AnimatePresence, motion } from "motion-v";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('absolute top-0 left-0 size-full object-cover', props.class)">
    <video-background
      src="/video/sparkles.webm"
      class="aspect-square size-full object-cover"
    ></video-background>
  </div>
</template>
