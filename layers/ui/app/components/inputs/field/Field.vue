<!-- FieldWrapper.vue -->
<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes["class"]
  orientation?: UOrientation
}>()
</script>

<template>
  <div data-slot="field" :class="cn(props.class)">
    <slot />
  </div>
</template>
