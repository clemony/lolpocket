<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('my-1 flex w-full items-center justify-start gap-3', className)
    ">
    <slot />
  </div>
</template>
