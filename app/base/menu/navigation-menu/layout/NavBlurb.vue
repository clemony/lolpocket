<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    :class="
      cn('leading-tight text-2 normal-case text-balanced text-start', className)
    ">
    <slot />
  </p>
</template>
