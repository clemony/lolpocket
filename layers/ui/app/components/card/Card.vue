<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-p3/90 bg-p0 text-pc shadow-sm shadow-black/6',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
