<script setup lang="ts">
import type { RuneSet } from '~~/shared/schema'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <div></div>
</template>