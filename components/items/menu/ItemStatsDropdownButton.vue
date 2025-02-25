<script lang="ts" setup>

</script>

<template>
    <DropdownMenu >
      <DropdownMenuTrigger class="btn btn-md bg-b1  rounded-lg indicator">
        <icon name="teenyicons:bar-chart-outline" class="size-5" />
      <div v-if="ts.filterItemStats.length" class=" indicator-item  inline-grid *:[grid-area:1/1]">
  <div class="status bg-sorcery animate-ping"></div>
  <div class="status bg-sorcery"></div>
</div>
      </DropdownMenuTrigger>
      <LazyItemStatsDropdown  />
    </DropdownMenu>
</template>

<style scoped>

</style>