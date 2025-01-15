<script setup lang="ts">
  const ds = useDataStore();
  const ps = usePocketStore();
  console.log('💠 - ds.champions:', ds.champions);
</script>

<template>
  <LayoutSpacer />
  <div class="flex">
    <HankoAuth />
    <HankoProfile />
  </div>
</template>

<style scoped></style>
