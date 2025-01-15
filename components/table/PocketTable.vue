<script setup lang="ts">
  import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';

  // Register all community features
  ModuleRegistry.registerModules([AllCommunityModule]);

  // Mark all grids as using legacy themes
  provideGlobalGridOptions({ theme: 'legacy' });

  import { AgGridVue } from 'ag-grid-vue3';
  import('ag-grid-community');

  import { SplitterPanel as ResizablePanel } from 'radix-vue';
  import { pocketTheme } from './gridTheme';
  // import { CustomNoRowsOverlay } from './GridNoRows';
  import { columnDefs, rowSelectionOptions, defaultColDef, quickFilterMatcher, quickFilterParser, autoSizeStrategy, getRowId } from './defs';
  import TableName from './GridName.vue';
  import IconRenderer from './IconRenderer.vue';
  import pocketNotes from './GridNotes.vue';
  import PocketTableChamps from './GridChampions.vue';
  import pocketTableItems from './GridItems.vue';
  import pocketTableRunes from './GridRunes.vue';
  import tableDate from './GridDate.vue';
  import TableCheckbox from './GridCheckbox.vue';
  import TableCheckboxHeader from './GridCheckboxHeader.vue';
  import TableTags from './GridTags.vue';
  defineExpose({
    TableName,
    IconRenderer,
    TableTags,
    pocketTableItems,
    PocketTableChamps,
    pocketTableRunes,
    pocketNotes,
    tableDate,
    TableCheckboxHeader,
    TableCheckbox,
  });

  const ps = usePocketStore();

  const pinnedApi = shallowRef();
  const gridApi = shallowRef();

  const headerGrid = ref();
  const pocketGrid = ref();
  const pinnedGrid = ref();

  const noData = ref();
  const rowData = ref(ps.allPockets);
  const pinnedData = ref(ps.pinnedPockets);

  const domLayout = ref(null);
  const filter = ref();

  onBeforeMount(() => {
    domLayout.value = 'autoHeight';
  });

  const setAutoHeight = () => {
    gridApi.value.setGridOption('domLayout', 'autoHeight');
    pinnedApi.value.setGridOption('domLayout', 'autoHeight');
    pocketGrid.value.style.height = '';
    pinnedGrid.value.style.height = '';
  };

  const onHeaderReady = (params) => {
    ps.headerApi = params.api;
    params.api.setGridOption('rowData', noData.value);
    const cols = params.api.getAllGridColumns();

    ps.columns = cols.map((col) => ({
      headerName: col.getColDef().headerName,
      isVisible: col.isVisible(), // Get current visibility status
      colId: col.getColId(),
    }));

    filter.value = params.api.getColumnFilterInstance('updated');
  };

  console.log(ps.columns);

  const onPinnedReady = (params) => {
    pinnedApi.value = params.api;
    params.api.setGridOption('rowData', pinnedData.value);
  };
  const onGridReady = (params) => {
    gridApi.value = params.api;
    params.api.setGridOption('rowData', rowData.value);
  };

  const headerOptions = {
    gridId: 'pinnedGrid',
    alignedGrids: () => [pocketGrid.value, pinnedGrid.value],
  };

  const pinnedOptions = {
    gridId: 'pinnedGrid',
    alignedGrids: () => [pocketGrid.value, headerGrid.value],
  };

  const gridOptions = {
    gridId: 'pocketGrid',
    alignedGrids: () => [pinnedGrid.value, headerGrid.value],
  };

  const topRowClass = 'mt-[95px]';

  const filterText = computed(() => ps.filterText);

  watch(
    () => ps.filterText,
    (newVal) => {
      onFilterTextBoxChanged();
    },
    { deep: true }
  );

  const onFilterTextBoxChanged = () => {
    if (gridApi.value) {
      gridApi.value.setGridOption('quickFilterText', filterText.value);
      gridApi.value.onFilterChanged(); // Trigger filtering
    } else {
      console.error('Grid API is not ready');
    }

    if (pinnedApi.value) {
      pinnedApi.value.setGridOption('quickFilterText', filterText.value);
      pinnedApi.value.onFilterChanged(); // Trigger filtering
    } else {
      console.error('Pinned API is not ready');
    }
  };

  const onSelectionChanged = () => {
    const selectedPocket = gridApi.value.getSelectedNodes();
    const selectedPinned = pinnedApi.value.getSelectedNodes();

    const selectedNodes = selectedPocket.concat(selectedPinned);

    const selectedRowsData = selectedNodes.map((node) => node.data);

    console.log('Selected Rows Data:', selectedRowsData);

    ps.updateSelectedRows(selectedRowsData);
  };

  /* const setLoading = (value) => {
    gridApi.value.setGridOption('loading', value)
}
 */
  watch(
    () => ps.allPockets,
    () => {
      if (gridApi.value) {
        gridApi.value.setGridOption('rowData', ps.allPockets);
      }
    },
    { deep: true }
  );

  watch(
    () => ps.pinnedPockets,
    () => {
      if (pinnedApi.value) {
        gridApi.value.setGridOption('rowData', ps.pinnedPockets);
      }
    },
    { deep: true }
  );
</script>

<template>
  <ResizablePanelGroup
    direction="vertical"
    as-child>
    <Card class="relative mx-6 ml-2 size-full max-h-[84.5%] max-w-[98%] overflow-hidden rounded-xl">
      <ResizablePanel as-child>
        <ag-grid-vue
          :theme="pocketTheme"
          class="top-grid l hidden h-1/2 w-full items-center bg-transparent!"
          ref="pinnedGrid"
          @grid-ready="onPinnedReady"
          :gridOptions="pinnedOptions"
          :rowData="pinnedData"
          @selection-changed="onSelectionChanged"
          :getRowId="getRowId"
          :rowClass="topRowClass"
          :rowSelectionOptions="rowSelectionOptions"
          SizeColumnsToFitGridStrategy
          :defaultColDef="defaultColDef"
          :suppressHorizontalScroll="false"
          :cacheQuickFilter="true"
          :quickFilterParser="quickFilterParser"
          :quickFilterMatcher="quickFilterMatcher" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel as-child>
        <ag-grid-vue
          :theme="pocketTheme"
          class="bottom-grid h-1/2 w-full items-center bg-transparent!"
          ref="pocketGrid"
          @grid-ready="onGridReady"
          :gridOptions="gridOptions"
          :rowData="rowData"
          @selection-changed="onSelectionChanged"
          :getRowId="getRowId"
          :rowSelectionOptions="rowSelectionOptions"
          :defaultColDef="defaultColDef"
          :suppressHorizontalScroll="false"
          SizeColumnsToFitGridStrategy
          :cacheQuickFilter="true"
          :quickFilterParser="quickFilterParser"
          :quickFilterMatcher="quickFilterMatcher" />

        <div class="bg-b1/80 absolute top-0 left-0 z-10 h-10 w-full rounded-t-xl backdrop-blur-md">
          <ag-grid-vue
            :theme="pocketTheme"
            class="col-headers h-full items-center rounded-none! bg-transparent"
            ref="headerGrid"
            id="header-grid"
            @grid-ready="onHeaderReady"
            :gridOptions="headerOptions"
            :rowData="noData"
            @selection-changed="onSelectionChanged"
            :getRowId="getRowId"
            :loading="false"
            SizeColumnsToFitGridStrategy
            :rowSelectionOptions="rowSelectionOptions"
            :suppressNoRowsOverlay="true"
            :defaultColDef="defaultColDef"
            :suppressHorizontalScroll="false" />
        </div>
      </ResizablePanel>
    </Card>
  </ResizablePanelGroup>
</template>
<style>
  :root {
    --ag-card-radius: 4px;

    --ag-popup-shadow: rgba(50, _50, _105, _0.15) _0px_2px_5px_0px, _rgba(0, _0, _0, _0.05) _0px_1px_1px_0px;
    --ag-card-shadow: var(--ag-popup-shadow);

    --ag-selected-row-background-color: var(--b2) / 0.4;
    --ag-row-height: 65px;
  }

  .bottom-grid,
  .top-grid {
    .ag-header {
      display: none;
    }
  }

  .ag-header-cell-filter-button {
    display: none;
  }

  .ag-menu {
    z-index: 10;
    margin-top: 7px;
    border: 1px solid var(--b3) / 80;
    background: var(--b1) / 95;
    backdrop-filter: blur(12px);
  }

  .ag-text-field-input {
    z-index: 20;
    background: var(--b1);
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }

  .ag-picker-field {
    z-index: 50;
    background: var(--b1) / 95;
    opacity: 1;
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
    backdrop-filter: blur(12px);
    :focus {
      box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
    }
  }

  .ag-picker-field-wrapper {
    outline: 0;
    :focus {
      outline: 0;
    }
  }

  .ag-select-list {
    z-index: 50;
    border: none;
    background: var(--b1) / 95;
    backdrop-filter: blur(12px);
  }

  .ag-body-horizontal-scroll,
  .ag-apple-scrollbar {
    opacity: 0.1 !important;
  }

  #header-grid {
    .col-headers {
      .ag-overlay,
      .ag-body-horizontal-scroll,
      .ag-apple-scrollbar {
        opacity: 0 !important;
        display: none;
      }
    }
  }
</style>
