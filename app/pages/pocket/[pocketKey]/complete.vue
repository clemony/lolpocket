<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
}>()
definePageMeta({
  name: 'complete',
  parent: '/pocket',
  search: false,
})
</script>

<template>
  <PagePlaceholder />
</template>

<style scoped>
</style>