<script setup lang="ts">
const ds = useDataStore()
const ps = usePocketStore()
console.log('💠 - ds.champions:', ds.champions)
</script>

<template>
  <div class="relative size-screen">
    <Pocketbar />
    <NuxtLayout name="inbox-layout"></NuxtLayout>
  </div>
</template>

<style scoped></style>
