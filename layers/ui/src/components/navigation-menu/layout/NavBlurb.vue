<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    :class="
      cn('text-balanced text-start text-sm leading-tight normal-case', className)
    ">
    <slot />
  </p>
</template>
