<script lang="ts" setup>
const ts = useTempStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="btn btn-xl bg-b1  hover:bg-b2/50 indicator">
      <icon name="teenyicons:bar-chart-outline" class="size-5" />
      <div v-if="is.filterItemStats.length" class=" indicator-item  inline-grid *:[grid-area:1/1]">
        <div class="status bg-sorcery animate-ping"></div>
        <div class="status bg-sorcery"></div>
      </div>
    </DropdownMenuTrigger>
    <LazyItemStatsDropdown />
  </DropdownMenu>
</template>

<style scoped>

</style>