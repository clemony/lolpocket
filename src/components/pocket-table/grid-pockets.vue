<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import TableName from './table-name.vue'
import pocketNotes from './table-notes.vue'
import PocketTableChamps from './table-champions.vue'
import pocketTableItems from './table-items.vue'
import pocketTableRunes from './table-runes.vue'
import tableDate from './table-date.vue'
import TableCheckbox from './table-checkbox.vue'
import TableCheckboxHeader from './table-checkbox-header.vue'
import { AgGridVue } from 'ag-grid-vue3'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { pocketTheme } from '@/config/ag-grid'
import { CustomNoRowsOverlay } from './table-no-rows'
import { columnDefs, rowSelection, defaultColDef, quickFilterMatcher, quickFilterParser, autoSizeStrategy, getRowId } from '../../config/pocket-defs'
const ps = usePocketStore()

defineExpose({
    TableName,
    pocketTableItems,
    PocketTableChamps,
    pocketTableRunes,
    pocketNotes,
    tableDate,
    TableCheckboxHeader,
    TableCheckbox
})



const gridApi = shallowRef()
const pinnedApi = shallowRef()

const onGridReady = (params) => {
    gridApi.value = params.api
    params.api.setGridOption('rowData', ps.rowData)
}

const onPinnedReady = (params) => {
    pinnedApi.value = params.api
    params.api.setGridOption('rowData', ps.pinnedRowData)
}

const pocketGrid = ref()
const pinnedGrid = ref()

const gridOptions = {
    gridId: 'pocketGrid',
    quickFilterText: '',
    defaultColDef,
    onGridReady: onGridReady,
    rowData: ps.rowData,
    getRowId: (params) => {
        return params.data.key
    },
    alignedGrids: () => [pinnedGrid.value],
    noRowsOverlayComponent: CustomNoRowsOverlay,
    noRowsOverlayComponentParams: {},
}

const pinnedOptions = {
    gridId: 'pinnedGrid',
    quickFilterText: '',
    defaultColDef,
    onGridReady: onPinnedReady,
    rowData: ps.pinnedRowData,
    getRowId: (params) => {
        return params.data.key
    },
    alignedGrids: () => [pocketGrid.value],
    noRowsOverlayComponent: CustomNoRowsOverlay,
    noRowsOverlayComponentParams: {},
}

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
    gridApi.value.setGridOption("loading", value);
}


watch(
    () => ps.rowData,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('rowData', ps.rowData)
        }
    },
    { deep: true }
)

watch(
    () => ps.pinnedRowData,
    () => {
        if (pinnedApi.value) {
            gridApi.value.setGridOption('rowData', ps.rowData)
        }
    },
    { deep: true }
)


</script>

<template>
<ResizablePanelGroup direction="vertical">

    <ResizablePanel :default-size='30'>





        <ag-grid-vue :theme="pocketTheme" class="h-full items-center !rounded-none bg-transparent " ref="pinnedGrid"
            @grid-ready="onPinnedReady" :columnDefs="columnDefs" :gridOptions="pinnedOptions"
            :rowData="ps.pinnedRowData" @selection-changed="onSelectionChanged" :getRowId="getRowId"
            :rowSelection="rowSelection" :defaultColDef="defaultColDef" :suppressHorizontalScroll="false"
            :autoSizeStrategy="autoSizeStrategy" :cacheQuickFilter="true" :quickFilterParser="quickFilterParser"
            :quickFilterMatcher="quickFilterMatcher" />



    </ResizablePanel>

    <ResizableHandle class=' border-y border-y-base-200 !h-4 !justify-start px-4'>
        <Label>General Pockets</Label>
    </ResizableHandle>
    <ResizablePanel :default-size='70'>
        <ag-grid-vue :theme="pocketTheme" class="bottom-grid h-full items-center !rounded-none bg-transparent "
            ref="pocketGrid" @grid-ready="onGridReady" :columnDefs="columnDefs" :gridOptions="gridOptions"
            :rowData="ps.rowData" @selection-changed="onSelectionChanged" :getRowId="getRowId"
            :rowSelection="rowSelection" :defaultColDef="defaultColDef" :suppressHorizontalScroll="false"
            :autoSizeStrategy="autoSizeStrategy" :cacheQuickFilter="true" :quickFilterParser="quickFilterParser"
            :quickFilterMatcher="quickFilterMatcher" />


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

.bottom-grid .ag-header {
    display: none;
}

.ag-header-cell {}

.ag-cell.ag-column-first {
    @apply ml-0;
}

.ag-cell.ag-column-last {}

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
</style>
