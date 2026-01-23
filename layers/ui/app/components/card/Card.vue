<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'border-b3/90 bg-b1 text-bc rounded-xl border shadow-sm shadow-black/6',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
