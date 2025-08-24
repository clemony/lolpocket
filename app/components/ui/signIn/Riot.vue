<script setup lang="ts">
const { class: className, variant, size } = defineProps<{
  class?: HTMLAttributes['class']
  variant?: any
  size?: any
}>()
</script>

<template>
  <Button
    :variant="variant"
    :size="size"
    :class="cn('', className)">
    <div class="size-5 overflow-hidden relative grid place-items-center pointer-events-none">
      <hicon
        name="riot"
        :class="cn('size-5.5 ')" />
    </div>
    <span><slot /></span>
  </Button>
</template>

<style scoped></style>
