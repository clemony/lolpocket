<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('mt-1 mb-1 flex w-full items-center justify-start gap-3', className)
    ">
    <slot />
  </div>
</template>
