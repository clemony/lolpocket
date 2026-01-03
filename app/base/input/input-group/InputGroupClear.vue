<script setup lang="ts">
const { class: className, size = 'sq-8' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size']
}>()
const emit = defineEmits(['clear:input'])
</script>

<template>
  <InputGroupButton
    :size
    align="inline-end"
    :class="cn('pointer-events-auto peer-has-placeholder-shown:opacity-0', className)"
    @click.stop="emit('clear:input')">
    <icon
      name="x"
      class="size-4 opacity-70" />
  </InputGroupButton>
</template>
