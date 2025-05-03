<script lang="ts" setup>
const { data } = await useFetch('/api/items-lite.json')
</script>

<template>
  <div class="flex size-full">
    <ChampionFilterSidebar />
    <slot />
  </div>
</template>