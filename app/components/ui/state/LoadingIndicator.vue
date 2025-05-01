<script lang="ts" setup>

const isLoading = ref(false)
useRuntimeHook('page:loading:start', () => {
  isLoading.value = true
})

useRuntimeHook('page:loading:end', () => {
  isLoading.value = false
})
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
