<script lang="ts" setup>
const { data, refresh, error, status, clear } = await useItemsData('posts/1')
</script>

<template>
  <div class="flex size-full">
    <ChampionFilterSidebar />
    <slot />
  </div>
</template>