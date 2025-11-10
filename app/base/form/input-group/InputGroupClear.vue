<script setup lang="ts">
const emit = defineEmits(['clear:input'])
</script>

<template>
  <InputGroupButton
    size="sq-8"
    align="inline-end"
    class="
      pointer-events-auto mr-2
      peer-has-placeholder-shown:opacity-0
    "
    @click.stop="emit('clear:input')">
    <icon
      name="x"
      class="size-4 opacity-70" />
  </InputGroupButton>
</template>