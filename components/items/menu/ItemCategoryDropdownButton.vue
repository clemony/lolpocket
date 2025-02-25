<script lang="ts" setup>

</script>

<template>
<DropdownMenu>
      <DropdownMenuTrigger class="btn  indicator rounded-lg btn-md bg-b1">

    <icon name="teenyicons:filter-outline" class="size-5" />
          <div v-if="ts.filterItemTypes.length" class=" indicator-item  inline-grid *:[grid-area:1/1]">
  <div class="status bg-sorcery animate-ping"></div>
  <div class="status bg-sorcery"></div>
</div>
  </DropdownMenuTrigger>
<LazyItemCategoryDropdown  />
      </DropdownMenu>
</template>

<style scoped>

</style>