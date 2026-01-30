<script setup lang="ts">
const { class: className, size = 'sq-8' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: InputGroupButtonVariants['size']
}>()
const emit = defineEmits(['clearInput'])
</script>

<template>
  <InputGroupButton
    :size
    align="inline-end"
    :class="
      cn('pointer-events-auto peer-has-placeholder-shown:opacity-0', className)
    "
    @click.stop="emit('clearInput')"
  >
    <icon class="size-4 opacity-70" name="x" />
  </InputGroupButton>
</template>
