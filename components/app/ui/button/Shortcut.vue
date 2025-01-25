<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  title: string
  shortcut: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Button variant="ghost" size="sm" :class="cn('w-full', props.class)">
    <slot name="1" />
    <div :class="cn('grow text-left font-medium', props.class)">
      {{ props.title }}
    </div>
    <slot name="2" />
    <div class="text-1 justify-end justify-self-end pr-2 opacity-80">
      {{ props.shortcut }}
    </div>
  </Button>
</template>

<style scoped></style>
