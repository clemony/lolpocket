<script setup lang="ts">
  const props = defineProps<{
    params: {
      icon: string;
    };
  }>();
</script>

<template>
  <div
    class="ag-cell-label-container"
    role="presentation">
    <span
      data-ref="eMenu"
      class="ag-header-icon ag-header-cell-menu-button"
      aria-hidden="true"></span>
    <span
      data-ref="eFilterButton"
      class="ag-header-icon ag-header-cell-filter-button"
      aria-hidden="true"></span>
    <div
      data-ref="eLabel"
      class="ag-header-cell-label"
      role="presentation">
      <span
        data-ref="eText"
        class="ag-header-cell-text">
        <!-- <icon :name="props.params.icon" /> -->
      </span>
      <span
        data-ref="eFilter"
        class="ag-header-icon ag-header-label-icon ag-filter-icon"
        aria-hidden="true"></span>
      <span
        data-ref="eSortOrder"
        class="ag-header-icon ag-header-label-icon ag-sort-order"
        aria-hidden="true"></span>
      <span
        data-ref="eSortAsc"
        class="ag-header-icon ag-header-label-icon ag-sort-ascending-icon"
        aria-hidden="true"></span>
      <span
        data-ref="eSortDesc"
        class="ag-header-icon ag-header-label-icon ag-sort-descending-icon"
        aria-hidden="true"></span>
      <span
        data-ref="eSortNone"
        class="ag-header-icon ag-header-label-icon ag-sort-none-icon"
        aria-hidden="true"></span>
    </div>
  </div>
</template>

<style scoped></style>
