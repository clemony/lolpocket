<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('flex items-center gap-3 mt-1 mb-1  justify-start w-full', className)
    ">
    <slot />
  </div>
</template>
