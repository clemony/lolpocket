<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <InputGroupAddon size="8" :class="cn('', className)" align="inline-start">
    <Icon class="size-4 opacity-40" name="search" />
  </InputGroupAddon>
</template>
