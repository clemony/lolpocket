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
      cn('border-b3-b3/80 input h-10 w-full border bg-b1 text-2 shadow-none inset-shadow-xs inset-shadow-black/4',
        props.class,
      )
    ">
    <slot />
  </Input>
</template>
