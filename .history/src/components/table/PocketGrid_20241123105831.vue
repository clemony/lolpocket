<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'

import { AgGridVue } from 'ag-grid-vue3'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/base/resizable'
import { pocketTheme } from './gridTheme'
import { CustomNoRowsOverlay } from './GridNoRows'
import {
    columnDefs,
    rowSelection,
    defaultColDef,
    quickFilterMatcher,
    quickFilterParser,
    autoSizeStrategy,
    getRowId,
} from './defs'
import TableName from './GridName.vue'
import pocketNotes from './GridNotes.vue'
import PocketTableChamps from './GridChampions.vue'
import pocketTableItems from './GridItems.vue'
import pocketTableRunes from './GridRunes.vue'
import tableDate from './GridDate.vue'
import TableCheckbox from './GridCheckbox.vue'
import TableCheckboxHeader from './GridCheckboxHeader.vue'
import TableTags from './GridTags.vue'
defineExpose({
    TableName,
    TableTags,
    pocketTableItems,
    PocketTableChamps,
    pocketTableRunes,
    pocketNotes,
    tableDate,
    TableCheckboxHeader,
    TableCheckbox,
})

const ps = usePocketStore()

const pinnedApi = shallowRef()
const gridApi = shallowRef()

const headerGrid = ref()
const pocketGrid = ref()
const pinnedGrid = ref()

const noData = ref()
const rowData = ref(ps.general)
const pinnedData = ref(ps.pinned)

const filter = ref()
console.log(filter)

/* .then(filterInstance => {
    filterInstance.myMethod();
});
 */
const onHeaderReady = (params) => {
    ps.headerApi = params.api
    params.api.setGridOption('rowData', noData.value)
    const cols = params.api.getAllGridColumns()

    ps.columns = cols.map((col) => ({
        headerName: col.getColDef().headerName,
        isVisible: col.isVisible(), // Get current visibility status
        colId: col.getColId(),
    }))

    filter.value = params.api.getColumnFilterInstance('updated')
}

console.log(ps.columns)

const onPinnedReady = (params) => {
    pinnedApi.value = params.api
    params.api.setGridOption('rowData', pinnedData.value)
}
const onGridReady = (params) => {
    gridApi.value = params.api
    params.api.setGridOption('rowData', rowData.value)
}

const headerOptions = {
    gridId: 'pinnedGrid',
    alignedGrids: () => [pocketGrid.value, pinnedGrid.value],
}

const pinnedOptions = {
    gridId: 'pinnedGrid',
    alignedGrids: () => [pocketGrid.value, headerGrid.value],
}

const gridOptions = {
    gridId: 'pocketGrid',
    alignedGrids: () => [pinnedGrid.value, headerGrid.value],
}

const topRowClass = 'mt-[95px]'

const filterText = computed(() => ps.filterText)

watch(
    () => ps.filterText,
    (newVal) => {
        onFilterTextBoxChanged()
    },
    { deep: true }
)

const onFilterTextBoxChanged = () => {
    if (gridApi.value) {
        gridApi.value.setGridOption('quickFilterText', filterText.value)
        gridApi.value.onFilterChanged() // Trigger filtering
    } else {
        console.error('Grid API is not ready')
    }

    if (pinnedApi.value) {
        pinnedApi.value.setGridOption('quickFilterText', filterText.value)
        pinnedApi.value.onFilterChanged() // Trigger filtering
    } else {
        console.error('Pinned API is not ready')
    }
}

const onSelectionChanged = () => {
    const selectedPocket = gridApi.value.getSelectedNodes()
    const selectedPinned = pinnedApi.value.getSelectedNodes()

    const selectedNodes = selectedPocket.concat(selectedPinned)

    const selectedRowsData = selectedNodes.map((node) => node.data)

    console.log('Selected Rows Data:', selectedRowsData)

    ps.updateSelectedRows(selectedRowsData)
}

const setLoading = (value) => {
    gridApi.value.setGridOption('loading', value)
}

watch(
    () => ps.general,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('rowData', ps.general)
        }
    },
    { deep: true }
)

watch(
    () => ps.pinned,
    () => {
        if (pinnedApi.value) {
            gridApi.value.setGridOption('rowData', ps.pinned)
        }
    },
    { deep: true }
)
</script>

<template>
    <div
        class="absolute top-[85px] z-10 h-10 w-full bg-base-100/80 backdrop-blur-md">
        <ag-grid-vue
            :theme="pocketTheme"
            class="col-headers h-full items-center !rounded-none bg-transparent"
            ref="headerGrid"
            @grid-ready="onHeaderReady"
            :columnDefs="columnDefs"
            :gridOptions="headerOptions"
            :rowData="noData"
            @selection-changed="onSelectionChanged"
            :getRowId="getRowId"
            :rowSelection="rowSelection"
            :defaultColDef="defaultColDef"
            :suppressHorizontalScroll="false"
            :autoSizeStrategy="autoSizeStrategy"
            :cacheQuickFilter="true"
            :quickFilterParser="quickFilterParser"
            :quickFilterMatcher="quickFilterMatcher" />
    </div>

    <ResizablePanelGroup
        direction="vertical"
        class="h-full pl-3 pr-6"
        auto-save-id="gs.pocketGridSize">
        <ResizablePanel :minSize="8" collapsible :collapsed-size="3.5">
            <ag-grid-vue
                :theme="pocketTheme"
                class="top-grid h-full items-center !rounded-none !bg-transparent"
                ref="pinnedGrid"
                @grid-ready="onPinnedReady"
                :columnDefs="columnDefs"
                :gridOptions="pinnedOptions"
                :rowData="pinnedData"
                @selection-changed="onSelectionChanged"
                :getRowId="getRowId"
                :rowClass="topRowClass"
                :rowSelection="rowSelection"
                :defaultColDef="defaultColDef"
                :suppressHorizontalScroll="false"
                :autoSizeStrategy="autoSizeStrategy"
                :cacheQuickFilter="true"
                :quickFilterParser="quickFilterParser"
                :quickFilterMatcher="quickFilterMatcher"
                :noRowsOverlayComponent="CustomNoRowsOverlay" />
        </ResizablePanel>

        <ResizableHandle class=""></ResizableHandle>

        <ResizablePanel
            :defaultSize="80"
            collapsible
            :collapsed-size="5"
            :minSize="20">
            <DisplayCard class="h-full [&_>div]:p-0">
                <ag-grid-vue
                    :theme="pocketTheme"
                    class="bottom-grid h-[93%] items-center !rounded-none !bg-transparent"
                    ref="pocketGrid"
                    @grid-ready="onGridReady"
                    :columnDefs="columnDefs"
                    :gridOptions="gridOptions"
                    :rowData="rowData"
                    @selection-changed="onSelectionChanged"
                    :getRowId="getRowId"
                    :rowSelection="rowSelection"
                    :defaultColDef="defaultColDef"
                    :suppressHorizontalScroll="false"
                    :autoSizeStrategy="autoSizeStrategy"
                    :cacheQuickFilter="true"
                    :quickFilterParser="quickFilterParser"
                    :quickFilterMatcher="quickFilterMatcher"
                    :noRowsOverlayComponent="CustomNoRowsOverlay" />
            </DisplayCard>
        </ResizablePanel>
    </ResizablePanelGroup>
</template>
<style>
:root {
    --ag-row-border-color: oklch(var(--b2) / 0.5);
    --ag-card-radius: 4px;
    --ag-border-radius: 4px;
    --ag-popup-shadow: rgba(50, _50, _105, _0.15) _0px_2px_5px_0px,
        _rgba(0, _0, _0, _0.05) _0px_1px_1px_0px;
    --ag-card-shadow: var(--ag-popup-shadow);
    --ag-range-selection-border-color: transparent;
    --ag-range-selection-border-style: none;
    --ag-selected-row-background-color: oklch(var(--b2) / 0.4);
    --ag-row-height: 58px;
    --ag-text-color: oklch(var(--bc));
}

.bottom-grid,
.top-grid {
    .ag-header {
        display: none;
    }
}

.ag-header-cell {
    @apply pl-2 pr-4;
}

.ag-cell.ag-column-first {
    @apply ml-0;
}

.ag-cell.ag-column-last {
}

.ag-menu {
    @apply !z-10 mt-1.5 border-base-300/80 !bg-base-100/95 backdrop-blur-md;
}

.ag-text-field-input {
    @apply z-20 !bg-base-100 outline-0 ring-0;
}

.ag-picker-field {
    @apply z-50 !bg-base-100/95 opacity-100 outline-0 !ring-0 backdrop-blur-md focus:ring-0;
}

.ag-picker-field-wrapper {
    @apply outline-0 !ring-0 focus:ring-0;
}

.ag-select-list {
    @apply z-50 border-0 !bg-base-100/95 backdrop-blur-md;
}

.ag-body-horizontal-scroll,
.ag-apple-scrollbar {
    opacity: 0.1 !important;
}

.col-headers,
.top-grid {
    .ag-overlay,
    .ag-body-horizontal-scroll,
    .ag-apple-scrollbar {
        opacity: 0 !important;
        display: none;
    }
}
</style>
