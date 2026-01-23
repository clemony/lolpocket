<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="
      btn-depth border-b3/70 h-12 rounded-xl px-4 shadow-none inset-shadow-none
    "
    :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>
