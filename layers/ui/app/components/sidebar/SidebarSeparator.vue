<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-p3/60', props.class)">
    <slot />
  </Separator>
</template>
