<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-b1 text-bc shadow-warm-soft',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
