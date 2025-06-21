<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <menu class="" :class="cn('grid grid-cols-2 gap-3 p-6 place-items-center grid-rows-2 w-160 h-90 overflow-hidden', className)">
    <slot />
  </menu>
</template>