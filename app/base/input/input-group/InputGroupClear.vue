<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const emit = defineEmits(['clear:input'])
</script>

<template>
  <InputGroupButton
    size="sq-8"
    align="inline-end"
    :class="cn('pointer-events-auto mr-2 peer-has-placeholder-shown:opacity-0', className)"
    @click.stop="emit('clear:input')">
    <icon
      name="x"
      class="size-4 opacity-70" />
  </InputGroupButton>
</template>
