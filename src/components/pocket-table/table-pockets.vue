<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import pocketIcon from '../pockets/pocket-icon.vue'
import pocketName from './table-name.vue'
import pocketNotes from './table-notes.vue'
import PocketTableChamps from './table-champions.vue'
import pocketTableItems from './table-items.vue'
import pocketTableRunes from './table-runes.vue'
import tableDate from './table-date.vue'
import TableCheckbox from './table-checkbox.vue'
import TableCheckboxHeader from './table-checkbox-header.vue'
import { AgGridVue } from 'ag-grid-vue3'
import { pocketTheme } from '@/config/ag-grid'
import { pocket } from 'types'
import { CustomNoRowsOverlay } from './table-no-rows'
import TableHeader from './table-header.vue'

const ps = usePocketStore()

const columnDefs = ref([
    {
        headerName: 'Pocket',
        field: 'header', // The field in the row data
        filter: 'agTextColumnFilter', // Set the text filter
        filterValueGetter: (params) => {
            const champions = params.data.champions[0].champions
            return champions.map((champion) => champion.name).join(', ')
        },
        width: 200,
        maxWidth: 300,
        minWidth: 156,
        cellRenderer: 'TableHeader',
        cellClass: '!overflow-x-auto flex items-center !w-200px !p-0 rounded-l overflow-hidden',

        valueFormatter: (params) => {
            if (params.value && params.value.champions) {
                return params.value.champions
                    .map((champion) => champion.name)
                    .join(', ')
            }
            return ''
        },
    },

    {
        headerName: 'Icon',
        field: 'icon',
        cellRenderer: 'pocketIcon',
        width: 66,
        hide: true,
        maxWidth: 66,
        minWidth: 66,
        sortable: false,
        resizable: false,
        headerClass: 'opacity-0',
        cellClass: '!px-0',
    },
    {
        headerName: 'Pocket',
        field: 'name',
        cellRenderer: 'pocketName',
        width: 100,
        hide: true,
        maxWidth: 200,
        minWidth: 100,
        cellClass: 'w-[150px]',
        filterValueGetter: (params) => {
            const name = params.data.name.split(' ')
            const type = params.data.type.split(' ')
            const pocket = name.concat(type)
            return pocket
        },
    },
    {
        headerName: 'Champions',
        field: 'champions', // The field in the row data
        filter: 'agTextColumnFilter', // Set the text filter
        filterValueGetter: (params) => {
            const champions = params.data.champions[0].champions
            return champions.map((champion) => champion.name).join(', ')
        },
        hide: true,
        width: 170,
        maxWidth: 300,
        minWidth: 156,
        cellRenderer: 'PocketTableChamps',
        cellClass: '!overflow-x-auto flex items-center !w-170px',

        valueFormatter: (params) => {
            if (params.value && params.value.champions) {
                return params.value.champions
                    .map((champion) => champion.name)
                    .join(', ')
            }
            return ''
        },
    },

    {
        headerName: 'Items',
        width: 400,
        maxWidth: 500,
        minWidth: 50,
        cellRenderer: 'pocketTableItems',
        filterValueGetter: (params) => {
            if (params.data.items[0].itemSets[0]) {
                const items = params.data.items[0].itemSets[0].items
                return items.map((item) => item.name).join(', ')
            }
        },
        valueFormatter: (params) => {
            if (params.value && params.value.itemSets[0]) {
                return params.value.itemSets[0].items
                    .map((item) => item.name)
                    .join(', ')
            }
            return ''
        },
    },
    {
        headerName: 'Runes',
        width: 80,
        cellRenderer: 'pocketTableRunes',
    },
    {
        headerName: 'Updated',
        field: 'dateUpdated',
        width: 100,
        maxWidth: 200,
        minWidth: 50,
        cellRenderer: 'tableDate',
        cellRendererParams: { type: 'updated' },
        valueFormatter: (params) => {
            const { date, time, patch } = params.value
            return `${date} - ${time} (Patch: ${patch})`
        },
        filterValueGetter: (params) => {
            const dateObj = params.data.dateUpdated[0]
            return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`
        },
    },

    {
        headerName: 'Created',
        field: 'dateCreated',
        width: 100,
        maxWidth: 200,
        minWidth: 50,
        cellRenderer: 'tableDate',
        cellRendererParams: { type: 'created' },
        valueFormatter: (params) => {
            const { date, time, patch } = params.value
            return `${date} - ${time} (Patch: ${patch})`
        },
        filterValueGetter: (params) => {
            const dateObj = params.data.dateCreated[0]
            return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`
        },
    },


    {
        headerName: 'Notes',
        width: 400,
        maxWidth: 500,
        minWidth: 50,
        cellRenderer: 'pocketNotes',
        filterValueGetter: (params) => {
            const notes = params.data.notes.split(' ')
            return notes
        },
    },
    {
        headerName: '',
        colId: 'checkbox',
        headerComponent: 'TableCheckboxHeader',
        width: 50,
        maxWidth: 50,
        minWidth: 50,
        cellRenderer: 'TableCheckbox',
        filter: false,
    },
])

const defaultColDef = {
    flex: 1,
    cellClass: ['flex items-center !px-1 py-[3px]'],
    sortable: true,
    filter: true,
    resizable: true,
}

const rowSelection = {
    mode: 'multiRow',
    checkboxes: false,
    enableClickSelection: false,
    hideDisabledCheckboxes: true,
    headerCheckbox: false,
}

const gridApi = shallowRef()
const rowData = computed(() => {
    return ps.rowData
})


const onGridReady = (params) => {
    gridApi.value = params.api
    ps.pocketApi = params.api
    params.api.setGridOption('rowData', ps.rowData) // Ensure row data is set on grid ready
}

const setLoading = (value) => {
    gridApi.value.setGridOption("loading", value);
};

const gridOptions = {
    quickFilterText: '',
    defaultColDef,
    onGridReady: onGridReady,
    rowData: rowData.value,
    //loading: true,
    pinnedTopRowData: ps.pinnedTopRowData,
    getRowId: (params) => {
        return params.data.key
    },
    noRowsOverlayComponent: CustomNoRowsOverlay,
    noRowsOverlayComponentParams: {},
}

defineExpose({
    TableHeader,
    pocketIcon,
    pocketName,
    pocketTableItems,
    PocketTableChamps,
    pocketTableRunes,
    pocketNotes,
    tableDate,
    TableCheckboxHeader,
    TableCheckbox
})





// Handle selection change event
const onSelectionChanged = () => {
    const selectedNodes = gridApi.value.getSelectedNodes()
    const selectedRowsData = selectedNodes.map((node) => node.data)
    console.log('Selected Rows Data:', selectedRowsData)

    // Update the Pinia store with the selected rows
    ps.updateSelectedRows(selectedRowsData)
}

const getRowId = (params) => params.data.key

const autoSizeStrategy = {
    type: 'fitCellContents',
}

const onPrintQuickFilterTexts = () => {
    ps.pocketApi.forEachNode(function (rowNode, index) {
        console.log(
            'Row ' +
            index +
            ' quick filter text is ' +
            rowNode.quickFilterAggregateText
        )
    })
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
}

const quickFilterParser = (quickFilter) => {
    let quickFilterParts: string[] = []
    let lastSpaceIndex = -1

    const isQuote = (index) => quickFilter[index] === '"'

    const getQuickFilterPart = (
        lastSpaceIndex: number,
        currentIndex: number
    ): string => {
        const startsWithQuote = isQuote(lastSpaceIndex + 1)
        const endsWithQuote = isQuote(currentIndex - 1)
        const startIndex =
            startsWithQuote && endsWithQuote ?
                lastSpaceIndex + 2
                : lastSpaceIndex + 1
        const endIndex =
            startsWithQuote && endsWithQuote ? currentIndex - 1 : currentIndex
        return quickFilter.slice(startIndex, endIndex)
    }
    for (let i = 0; i < quickFilter.length; i++) {
        const char = quickFilter[i]
        if (char === ' ') {
            if (!isQuote(lastSpaceIndex + 1) || isQuote(i - 1)) {
                quickFilterParts.push(getQuickFilterPart(lastSpaceIndex, i))
                lastSpaceIndex = i
            }
        }
    }
    if (lastSpaceIndex !== quickFilter.length - 1) {
        quickFilterParts.push(
            getQuickFilterPart(lastSpaceIndex, quickFilter.length)
        )
    }
    return quickFilterParts
}
const quickFilterMatcher = (quickFilterParts, rowQuickFilterAggregateText) => {
    let result
    try {
        result = quickFilterParts.every((part) =>
            rowQuickFilterAggregateText.match(part)
        )
    } catch {
        result = false
    }
    return result
}


watch(
    () => ps.rowData,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('rowData', ps.rowData) // Explicitly set the new row data
        }
    },
    { deep: true }
)

watch(
    () => ps.pinnedTopRowData,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('pinnedTopRowData', ps.pinnedTopRowData) // Explicitly set the new row data
        }
    },
    { deep: true }
)


</script>

<template><ag-grid-vue :theme="pocketTheme" class="h-[calc(100%-107px)] items-center !rounded-none bg-transparent "
    ref="pocketTable" @grid-ready="onGridReady" :columnDefs="columnDefs" :gridOptions="gridOptions" :rowData="rowData"
    @selection-changed="onSelectionChanged" :getRowId="getRowId" :rowSelection="rowSelection"
    :defaultColDef="defaultColDef" :suppressHorizontalScroll="false" :autoSizeStrategy="autoSizeStrategy"
    :cacheQuickFilter="true" :quickFilterParser="quickFilterParser" :quickFilterMatcher="quickFilterMatcher" /></template>
<style>
/* beautify ignore:start */
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
    --ag-row-height: 75px;
    --ag-text-color: oklch(var(--bc));
}
.ag-header-cell {
}

.ag-cell.ag-column-first {
    @apply ml-3;
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
    @apply z-50 !bg-base-100/95 backdrop-blur-md border-0;
}</style>
