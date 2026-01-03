<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <div
    :class="cn('', className)">
  </div>
</template>