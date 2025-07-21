<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('bg-b1 rounded-box px-4 py-4 text-bc shadow-warm-soft drop-shadow-sm border border-b3/60', className)">
<slot  />
  </div>
</template>