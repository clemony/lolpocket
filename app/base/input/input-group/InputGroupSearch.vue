<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <InputGroupAddon
    size="8"
    :class="cn('', className)"
    align="inline-start">
    <icon
      name="search"
      class="size-4 opacity-40" />
  </InputGroupAddon>
</template>
