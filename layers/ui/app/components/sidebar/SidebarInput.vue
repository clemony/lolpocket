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
      cn('border-b3-b3/80 input bg-b1 h-10 w-full border text-sm shadow-none inset-shadow-xs inset-shadow-black/4',
         props.class,
      )
    ">
    <slot />
  </Input>
</template>
