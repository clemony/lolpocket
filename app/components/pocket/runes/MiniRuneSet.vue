<script setup lang="ts">
import type { RuneSet } from '@types'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <div></div>
</template>
