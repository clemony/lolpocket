<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-b3/90 bg-b1 text-bc shadow-sm shadow-black/6',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
