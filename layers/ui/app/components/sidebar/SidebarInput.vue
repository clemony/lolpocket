<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    :class="
      cn(
        'border-p3-p3/80 input h-10 w-full border bg-p0 text-sm shadow-none inset-shadow-xs inset-shadow-black/4',
        props.class,
      )
    ">
    <slot />
  </Input>
</template>
