<script setup lang="ts">
const isLoading = ref(false)
useRuntimeHook('page:loading:start', () => {
  isLoading.value = true
})

useRuntimeHook('page:loading:end', () => {
  isLoading.value = false
})
</script>

<template>
  <ui-eclipse class="text-bc size-12" />
</template>

<style scoped></style>
