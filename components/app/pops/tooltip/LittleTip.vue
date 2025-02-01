<script setup lang="ts">
import 'tippy.js/animations/scale.css';

const props = defineProps<{
  content: string
}>()
</script>

<template>
  <tippy :content="props.content">
    <slot />
  </tippy>
</template>

<style scoped></style>