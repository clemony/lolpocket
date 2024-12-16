<script setup lang="ts">
import {
    ref,
    h,
    watch,
    computed,
    shallowRef,
    onBeforeMount,
    onMounted,
} from 'vue'

import { usePocketStore } from '@stores/pocketStore'

import { AgGridVue } from 'ag-grid-vue3'
import { pocketTheme } from '@components/Table/gridTheme'
import type { pocket } from 'types'
import { stats } from '@data/stats'
import { useDataStore } from '@stores/dataStore'

const ps = usePocketStore()
const ds = useDataStore()
const rowData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
]
const columnDefs = ref([
    {
        width: 40,
        headerName: '',
        field: 'stat',
        suppressNavigable: true,
        suppressPaste: true,
        suppressMovable: true,
        suppressAutoSize: true,
        suppressHeaderMenuButton: true,
        lockPosition: true,
        cellStyle: { padding: 0 },
        valueGetter: ({ node }) => {
            // Access `ds.uniqueStats` and use the row index to fetch a specific value
            const statIndex = node.rowIndex // Use row index to select from `uniqueStats`
            const stat = stats[statIndex].name

            if (stat && stat != undefined) {
                return stat ? stat : 'Default Value' // Replace 'Default Value' as needed
            }
        },
    },
    {},
    {},

    {},
    {},
    {},

    {},

    {},
])

const defaultColDef = {
    flex: 1,
    cellClass: ['flex items-center px-1! py-[3px]'],
    sortable: true,
    filter: true,
    resizable: true,
}

const rowSelection = {
    mode: 'multiRow',
    checkboxes: false,
    enableClickSelection: true,
    hideDisabledCheckboxes: true,
    headerCheckbox: false,
}

const gridApi = shallowRef()

console.log(ps.pockets)
const onGridReady = (params) => {
    gridApi.value = params.api
    // ps.pocketApi = params.api;
    //params.api.setGridOption("rowData", ps.rowData); // Ensure row data is set on grid ready
}

const gridOptions = {
    quickFilterText: '',
    defaultColDef,
    onGridReady: onGridReady,
    rowData: rowData,
    //pinnedTopRowData: ps.pinnedTopRowData,
    /*     getRowId: (params) => {
            return params.data.key;
        }, */
}

// Handle selection change event
const onSelectionChanged = () => {
    const selectedNodes = gridApi.value.getSelectedNodes()
    const selectedRowsData = selectedNodes.map((node) => node.data)
    console.log('Selected Rows Data:', selectedRowsData)

    // Update the Pinia store with the selected rows
    ps.updateSelectedRows(selectedRowsData)
}

//const getRowId = params => params.data.key;

const autoSizeStrategy = {
    type: 'fitCellContents',
}

defineExpose({})
</script>
<!-- 
<template><ag-grid-vue :theme="pocketTheme" class="h-[calc(100%-107px)] items-center rounded-none! bg-transparent "
    ref="pocketTable" @grid-ready="onGridReady" :columnDefs="columnDefs" :gridOptions="gridOptions" :rowData="rowData"
    @selection-changed="onSelectionChanged" :rowSelection="rowSelection" :defaultColDef="defaultColDef"
    :suppressHorizontalScroll="false" :autoSizeStrategy="autoSizeStrategy" :cacheQuickFilter="true" /></template>

<style>
</style>

