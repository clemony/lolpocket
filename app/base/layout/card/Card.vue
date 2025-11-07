<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-b1 border-b3/80 text-bc shadow-sm shadow-black/6',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
