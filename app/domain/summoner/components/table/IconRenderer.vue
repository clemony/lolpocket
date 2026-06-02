<script setup lang="ts">
const props = defineProps<{
  params: {
    icon: string
  }
}>()
</script>

<template>
  <div class="ag-cell-label-container" role="presentation">
    <span
      class="ag-header-icon ag-header-cell-menu-button"
      data-ref="eMenu"
      aria-hidden="true" />

    <span
      class="ag-header-icon ag-header-cell-filter-button"
      data-ref="eFilterButton"
      aria-hidden="true" />

    <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
      <span class="ag-header-cell-text" data-ref="eText">
        <!-- <icon :name="props.params.icon" /> -->
      </span>

      <span
        class="ag-header-icon ag-header-label-icon ag-filter-icon"
        data-ref="eFilter"
        aria-hidden="true" />

      <span
        class="ag-header-icon ag-header-label-icon ag-sort-order"
        data-ref="eSortOrder"
        aria-hidden="true" />

      <span
        class="ag-header-icon ag-header-label-icon ag-sort-ascending-icon"
        data-ref="eSortAsc"
        aria-hidden="true" />

      <span
        class="ag-header-icon ag-header-label-icon ag-sort-descending-icon"
        data-ref="eSortDesc"
        aria-hidden="true" />

      <span
        class="ag-header-icon ag-header-label-icon ag-sort-none-icon"
        data-ref="eSortNone"
        aria-hidden="true" />
    </div>
  </div>
</template>
