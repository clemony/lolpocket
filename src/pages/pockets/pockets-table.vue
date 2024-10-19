<script setup lang="ts">
import { ref, h, watch, computed, shallowRef, onBeforeMount, onMounted } from 'vue';

import { usePocketStore } from '../../stores/pocketStore';
import pocketIcon from './table/table-icon.vue';
import pocketName from './table/table-name.vue';
import pocketNotes from './table/table-notes.vue';
import PocketTableChamps from './table/table-champions.vue';
import pocketTableItems from './table/table-items.vue';
import pocketTableRunes from './table/table-runes.vue';
import tableDate from './table/table-date.vue';
import { AgGridVue } from "ag-grid-vue3";
import { pocketTheme } from '../../assets/script/gridTheme';
import { pocket } from '../../../types';
import { CustomNoRowsOverlay } from './table/table-noRows';


const ps = usePocketStore();

const columnDefs = ref([

    {
        headerName: "Icon",
        field: "icon",
        cellRenderer: "pocketIcon",
        width: 66, maxWidth: 66, minWidth: 66,
        sortable: false, resizable: false,
        headerClass: 'opacity-0', cellClass: "!px-0",
    },
    {
        headerName: "Pocket",
        field: "name",
        cellRenderer: "pocketName",
        width: 100, maxWidth: 200, minWidth: 100,
        cellClass: "w-[150px]",
        filterValueGetter: (params) => {
            const name = params.data.name.split(' ');
            const type = params.data.type.split(' ');
            const pocket = name.concat(type);
            return pocket;
        }
    },
    {
        headerName: "Champions",
        field: "champions", // The field in the row data
        filter: "agTextColumnFilter", // Set the text filter
        filterValueGetter: (params) => {
            const champions = params.data.champions[0].champions;
            return champions.map((champion) => champion.name).join(", ");
        },
        width: 170,
        maxWidth: 300,
        minWidth: 156,
        cellRenderer: "PocketTableChamps",
        cellClass: "!px-2 !py-[3px] flex items-center !w-170px",

        valueFormatter: (params) => {

            if (params.value && params.value.champions) {
                return params.value.champions.map(champion => champion.name).join(', ');
            }
            return '';
        }
    },

    {
        headerName: "Items", width: 400, maxWidth: 500, minWidth: 50,
        cellRenderer: "pocketTableItems",
        filterValueGetter: (params) => {
            if (params.data.items[0].itemSets[0]) {
                const items = params.data.items[0].itemSets[0].items;
                return items.map((item) => item.name).join(", ");
            };
        },
        valueFormatter: (params) => {

            if (params.value && params.value.itemSets[0]) {
                return params.value.itemSets[0].items.map(item => item.name).join(', ');
            }
            return '';
        }
    },
    {
        headerName: "Runes", width: 80,
        cellRenderer: "pocketTableRunes"
    },
    {
        headerName: "Notes", width: 400, maxWidth: 500, minWidth: 50,
        cellRenderer: "pocketNotes",
        filterValueGetter: (params) => {
            const notes = params.data.notes.split(' ');
            return notes;
        }
    },

    {
        headerName: "Created", field: "dateCreated", width: 100, maxWidth: 200, minWidth: 50, cellRenderer: "tableDate", cellRendererParams: { type: 'created' },
        valueFormatter: (params) => {
            const { date, time, patch } = params.value;
            return `${date} - ${time} (Patch: ${patch})`;
        },
        filterValueGetter: (params) => {
            const dateObj = params.data.dateCreated[0];
            return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`;
        }
    },

    {
        headerName: "Updated", field: "dateUpdated", width: 100, maxWidth: 200, minWidth: 50, cellRenderer: "tableDate", cellRendererParams: { type: 'updated' }, valueFormatter: (params) => {
            const { date, time, patch } = params.value;
            return `${date} - ${time} (Patch: ${patch})`;
        },
        filterValueGetter: (params) => {
            const dateObj = params.data.dateUpdated[0];
            return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`;
        }
    },

]);



const defaultColDef = {
    flex: 1,
    cellClass: ['flex items-center !px-1 py-[3px]'],
    sortable: true,
    filter: true,
    resizable: true,
};


const rowSelection = {
    mode: 'multiRow',
    checkboxes: false,
    enableClickSelection: true,
    hideDisabledCheckboxes: true,
    headerCheckbox: false,
};

const gridApi = shallowRef();
const rowData = computed(() => {
    return ps.rowData;
});

watch(
    () => ps.rowData,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('rowData', ps.rowData); // Explicitly set the new row data
        }
    },
    { deep: true }
);

watch(
    () => ps.pinnedTopRowData,
    () => {
        if (gridApi.value) {
            gridApi.value.setGridOption('pinnedTopRowData', ps.pinnedTopRowData); // Explicitly set the new row data
        }
    },
    { deep: true }
);


console.log(ps.pockets)
const onGridReady = (params) => {
    gridApi.value = params.api;
    ps.pocketApi = params.api;
    params.api.setGridOption("rowData", ps.rowData); // Ensure row data is set on grid ready

};

const gridOptions = {
    quickFilterText: '',
    defaultColDef,
    onGridReady: onGridReady,
    rowData: rowData.value,
    pinnedTopRowData: ps.pinnedTopRowData,
    getRowId: (params) => {
        return params.data.key;
    },

    noRowsOverlayComponent: CustomNoRowsOverlay,
    noRowsOverlayComponentParams: {
    },
};

// Handle selection change event
const onSelectionChanged = () => {
    const selectedNodes = gridApi.value.getSelectedNodes();
    const selectedRowsData = selectedNodes.map(node => node.data);
    console.log('Selected Rows Data:', selectedRowsData);

    // Update the Pinia store with the selected rows
    ps.updateSelectedRows(selectedRowsData);
};

const getRowId = params => params.data.key;

const autoSizeStrategy = {
    type: 'fitCellContents',
};











const onPrintQuickFilterTexts = () => {
    ps.pocketApi.forEachNode(function (rowNode, index) {
        console.log(
            "Row " +
            index +
            " quick filter text is " +
            rowNode.quickFilterAggregateText,
        );
    });
};

const filterText = computed(() => (
    ps.filterText
));

watch(() => ps.filterText, (newVal) => {
    onFilterTextBoxChanged();
}, { deep: true });

const onFilterTextBoxChanged = () => {
    if (gridApi.value) {
        gridApi.value.setGridOption('quickFilterText', filterText.value);
        gridApi.value.onFilterChanged();  // Trigger filtering
    } else {
        console.error('Grid API is not ready');
    }
};


const quickFilterParser = (quickFilter) => {
    let quickFilterParts: string[] = [];
    let lastSpaceIndex = -1;

    const isQuote = (index) => quickFilter[index] === '"';

    const getQuickFilterPart = (lastSpaceIndex: number, currentIndex: number): string => {
        const startsWithQuote = isQuote(lastSpaceIndex + 1);
        const endsWithQuote = isQuote(currentIndex - 1);
        const startIndex =
            startsWithQuote && endsWithQuote
                ? lastSpaceIndex + 2
                : lastSpaceIndex + 1;
        const endIndex =
            startsWithQuote && endsWithQuote ? currentIndex - 1 : currentIndex;
        return quickFilter.slice(startIndex, endIndex);
    };
    for (let i = 0; i < quickFilter.length; i++) {
        const char = quickFilter[i];
        if (char === " ") {
            if (!isQuote(lastSpaceIndex + 1) || isQuote(i - 1)) {
                quickFilterParts.push(getQuickFilterPart(lastSpaceIndex, i));
                lastSpaceIndex = i;
            }
        }
    }
    if (lastSpaceIndex !== quickFilter.length - 1) {
        quickFilterParts.push(
            getQuickFilterPart(lastSpaceIndex, quickFilter.length),
        );
    }
    return quickFilterParts;
};
const quickFilterMatcher = (
    quickFilterParts,
    rowQuickFilterAggregateText,
) => {
    let result;
    try {
        result = quickFilterParts.every((part) =>
            rowQuickFilterAggregateText.match(part),
        );
    } catch {
        result = false;
    }
    return result;
};


defineExpose({ pocketIcon, pocketName, pocketTableItems, PocketTableChamps, pocketTableRunes, pocketNotes, tableDate })

</script>

<template>

    <ag-grid-vue :theme="pocketTheme" class="h-[calc(100%-107px)] !rounded-none items-center text-xs bg-transparent"
        ref="pocketTable" @grid-ready="onGridReady" :columnDefs="columnDefs" :gridOptions="gridOptions"
        :rowData="rowData" @selection-changed="onSelectionChanged" :getRowId="getRowId" :rowSelection="rowSelection"
        :defaultColDef="defaultColDef" :suppressHorizontalScroll="false" :autoSizeStrategy="autoSizeStrategy"
        :cacheQuickFilter="true" :quickFilterParser="quickFilterParser" :quickFilterMatcher="quickFilterMatcher" />


</template>

<style>
/* beautify ignore:start */
:root{
    --ag-row-border-color: oklch(var(--b2)/0.5);
    --ag-card-radius: 4px;
    --ag-border-radius: 4px;
    --ag-popup-shadow: rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px;
    --ag-card-shadow: var(--ag-popup-shadow);
    --ag-range-selection-border-color: transparent;
    --ag-range-selection-border-style: none;
    --ag-selected-row-background-color: oklch(var(--b2)/0.4);
    --ag-row-height: 65px;
    --ag-text-color: oklch(var(--bc));

}
.ag-header-cell {


}




.ag-cell.ag-column-first {
    @apply ml-3;
}



.ag-menu{

    @apply !bg-base-100/95 backdrop-blur-md !z-10 border-base-300/80 mt-1.5;
    }
    
    .ag-text-field-input  {
    
    @apply !bg-base-100 outline-0  ring-0 z-20;
    }

    .ag-picker-field {
        @apply !bg-base-100/95 backdrop-blur-md !ring-0 focus:ring-0 outline-0 z-50 opacity-100;
    }

    .ag-picker-field-wrapper {
        @apply  !ring-0 focus:ring-0 outline-0 ;
    }

.ag-select-list  {
    @apply !bg-base-100/95 backdrop-blur-md  z-50;
    }
    </style>