<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="shadow-none inset-shadow-none  h-12 btn-depth rounded-xl  border-b3/70 px-4"
    :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>