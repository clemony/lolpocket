<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="btn-depth h-12 rounded-xl border-p3/70 px-4 shadow-none inset-shadow-none"
    :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>
