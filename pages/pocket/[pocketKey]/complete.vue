<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
definePageMeta({
  name: 'complete',
})
</script>

<template>
  <div>
    <PocketHeader title="Champions" :pocket="pocket" class="" />
  </div>
</template>

<style scoped>
</style>