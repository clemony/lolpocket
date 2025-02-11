<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
  
  const props = defineProps<{
  class?: HTMLAttributes['class']
  }>()
</script>

<template>
  <div :class="cn('bg-b2/40 rounded-lg border border-b3/60 inset-shadow-xs shadow-sm inset-shadow-black/2 shadow-black/3 grid place-items-center', props.class)">
    <slot  />
  </div>
</template>

<style scoped>

</style>