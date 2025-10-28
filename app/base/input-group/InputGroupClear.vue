<script setup lang="ts">
const emit = defineEmits(['clear:input'])
</script>

<template>
  <InputGroupButton
    size="sq-xs"
<<<<<<< HEAD
    align="inline-end"
    class="peer-has-placeholder-shown:opacity-0 mr-2 pointer-events-auto"
    @click.stop="emit('clear:input')">
=======
    class="peer-has-placeholder-shown:opacity-0 mr-2"
    @click="emit('clear:input')">
>>>>>>> refs/remotes/origin/main
    <icon
      name="x"
      class="size-4 opacity-70" />
  </InputGroupButton>
</template>