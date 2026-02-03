<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Label :class="cn(props.class)">
    <slot />
  </Label>
</template>
