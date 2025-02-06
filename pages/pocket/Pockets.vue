<script lang="ts" setup>
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import TableIcon from 'components/table/components/TableIcon.vue'
import TableLink from 'components/table/components/TableLink.vue'
import TableKey from 'components/table/components/TableKey.vue'

defineExpose({
  TableIcon,
  TableLink,
  TableKey,
})
definePageMeta({
  alias: '/pockets',
})
const ps = usePocketStore()
const theme = ref(pocketTheme)
const pocketList = [...ps.pockets]

const gridOptions: GridOptions<Item> = {
  rowData: pocketList,
  columnHoverHighlight: false,
  autoSizeStrategy: {
    type: 'fitGridWidth',
    defaultMinWidth: 50,
  },
  rowHeight: 70,
  rowSelection: {
    mode: 'multiRow',
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  },

  defaultColDef: {
    width: 51,
    minWidth: 51,
    suppressHeaderMenuButton: true,
    cellClass: 'cell-class py-2',
    initialHide: false,
    suppressHeaderFilterButton: true,
    resizable: false,
  },
  defaultColGroupDef: {
    marryChildren: true,
  },
}

const colDefs = ref<(ColDef | ColGroupDef)[]>([
  { field: 'icon', headerName: '', cellRenderer: TableIcon, cellClass: 'ti-pocket-icon', sortable: false },

  { field: 'name', cellRenderer: TableLink, width: 140, sortable: false, cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Pocket',
    },
  }
},
  { field: 'role', cellRenderer: params => {}, width: 140, sortable: false, cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Pocket',
    },
  }
},
  {
    headerName: 'Champions',
    children: [
      { field: '',  valueGetter: p => p.data.champions.children[0], cellRenderer: TableIcon, cellClass: 'ti-champ' },
      { field: '',  valueGetter: p => p.data.champions.children[1], cellRenderer: TableIcon, cellClass: 'ti-champ' },
      { field: '',  valueGetter: p => p.data.champions.children[2], cellRenderer: TableIcon, cellClass: 'ti-champ' },
      { field: '',  sortable: false, width:20, suppressMovable: true},
    ],
  },
  {
    headerName: 'Items',
    children: [
      { field: '1', headerName: '', cellRendererParams: { index: 0 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
      { field: '2', headerName: '', cellRendererParams: { index: 1 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
      { field: '3', headerName: '', cellRendererParams: { index: 2 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
      { field: '4', headerName: '', cellRendererParams: { index: 3 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
      { field: '5', headerName: '', cellRendererParams: { index: 4 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
      { field: '6', headerName: '', cellRendererParams: { index: 5 }, cellRenderer: TableIcon, cellClass: 'ti-item' },
         { field: '',  sortable: false, width:20, suppressMovable: true},
    ],
  },
  {
    headerName: 'Runes',
    children: [
      { field: 'Keystone', width: 60, cellRenderer: TableIcon, cellClass: 'ti-irune'},
      { field: 'Secondary', width: 60, cellRenderer: TableIcon, cellClass: 'ti-rune' },
         { field: '',  sortable: false, width:20, suppressMovable: true},
    ],
  },
  {
    headerName: 'Spells',
    children: [
      { field: 'D', headerComponentParams: {
        innerHeaderComponent: TableKey,
        innerHeaderComponentParams: {
          kbdKey: 'D',
        },
      }, cellRenderer: TableIcon, cellRendererParams: {index: 1}, cellClass: 'ti-spell' },
      { field: 'F', headerComponentParams: {
        innerHeaderComponent: TableKey,
        innerHeaderComponentParams: {
          kbdKey: 'F',
        },
      }, cellRenderer: TableIcon, cellRendererParams: {index: 1}, cellClass: 'ti-spell' },
         { field: '',  sortable: false, width:20, suppressMovable: true},
    ],
  },

  {
    field: 'tags',
    headerName: 'Tags',
    width: 140,
    valueGetter: p => p.data.tags,
  },

])

const gridApi = shallowRef<GridApi | null>(null)
async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  ps.pocketApi = gridApi.value
}
ModuleRegistry.registerModules([AllCommunityModule])


</script>

<template>
<NuxtLayout name="grid-layout" title="Pockets">
      <AgGridVue
        :grid-options="gridOptions"
        :theme="theme"
        :column-defs="colDefs"
        class="size-full"
        :tooltip-show-delay="400"

        @grid-ready="onGridReady"
      >
      </AgGridVue>
</NuxtLayout>
</template>

<style>
</style>