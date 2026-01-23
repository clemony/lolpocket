<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    :class="cn('bg-b3/60 mx-2 w-auto', props.class)">
    <slot />
  </Separator>
</template>
