<script lang="ts" setup>
import type {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridPreDestroyedEvent,
  GridReadyEvent,
} from 'ag-grid-community'
import {
  CellStyleModule,
  ClientSideRowModelModule,
  ColumnApiModule,
  ColumnAutoSizeModule,
  ColumnHoverModule,
  GridStateModule,
  ModuleRegistry,
  RenderApiModule,
  RowSelectionModule,
  ValidationModule,
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { pocketTheme } from '~/utils/config/tableTheme'
import ChampionGridIcon from './chart-comps/ChampionGridIcon.vue'
import PatchCellRenderer from './chart-comps/PatchCellRenderer.vue'

const { champions } = defineProps<{
  champions: any[]
}>()

defineExpose({
  ChampionGridIcon,
  PatchCellRenderer,
})

const theme = ref(pocketTheme)
const championList = computed(() => champions)
console.log('💠 - championList:', championList.value)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<any[]> = {
  columnHoverHighlight: false,
  defaultColDef: {
    minWidth: 50,
    flex: 1,
    // autoHeaderHeight: true,
    // wrapHeaderText: true,
    initialHide: false,
    cellClass: ['champion-grid-cell'],
    headerClass: ['champion-grid-header', 'text-center'],
    sortingOrder: ['desc', 'asc', null],
    /*     headerComponentParams: {
      innerHeaderComponent: CustomInnerHeader,
    }, */

    // resizable: false,
  },
  defaultColGroupDef: {
    suppressStickyLabel: true,
  },
  rowData: championList.value,
  rowSelection: {
    checkboxes: false,
    enableClickSelection: true,
    headerCheckbox: false,
    mode: 'multiRow',
  },
}

const colDefs: ColDef<any>[] = [
  {
    maxWidth: 61,
    minWidth: 61,
    width: 61,
    cellClass: '!py-1 !pr-1 !ml-0',
    cellRenderer: ChampionGridIcon,
    field: '',
    headerName: '',
    pinned: 'left',
    sortable: false,
  },

  {
    maxWidth: 90,
    cellClass: 'font-medium  ',
    cellDataType: 'text',
    field: 'champion',
    headerClass: '',
    headerName: 'Champion',
    sortable: false,
  },
  {
    maxWidth: 80,
    cellClass: 'font-medium  ',
    cellDataType: 'number',
    field: 'winrate',
    headerClass: '',
    headerName: 'Winrate',
    valueFormatter: params => `${Math.round(params.value * 100) / 100}%`,
  },
  {
    maxWidth: 80,
    cellClass: 'font-medium  ',
    cellDataType: 'number',
    field: 'bayesianWinrate',
    headerClass: '',
    headerName: 'Adj. WR',
    valueFormatter: params => `${Math.round(params.value * 100) / 100}%`,
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'games',
    headerName: '#',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'wins',
    headerName: 'Win',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'losses',
    headerName: 'Lose',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'avgKills',
    headerName: 'K',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'avgDeaths',
    headerName: 'D',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'avgAssists',
    headerName: 'Games',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'kda',
    headerName: 'Ratio',
  },
  {
    maxWidth: 50,
    cellClass: 'font-medium',
    cellDataType: 'number',
    field: 'avgKp',
    headerName: 'Games',
  },
  {
    maxWidth: 180,
    minWidth: 180,
    cellClass: 'font-medium',
    cellDataType: 'text',
    cellRenderer: PatchCellRenderer,
    field: 'gamePatches',
    headerName: 'Patch',
  },
]

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  cs().championGridApi = gridApi.value
}

watch(
  () => championList.value,
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [...championList.value])
  }
)

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule,
  RowSelectionModule,
  ColumnAutoSizeModule,
  ColumnHoverModule,
  ColumnHoverModule,
  ColumnApiModule,
  CellStyleModule,
  GridStateModule,
  RenderApiModule,
])
</script>

<template>
  <AgGridVue
    :initial-state="cs().dbChampionGridState"
    class="!size-full stat-grid champion-grid bg-b1 !shadow-black/3 !drop-shadow-black/3 border-shadow-sm min-w-full"
    :grid-options="gridOptions"
    :theme="theme"
    :column-defs="colDefs"
    :tooltip-show-delay="400"
    @grid-ready="onGridReady"></AgGridVue>
</template>
