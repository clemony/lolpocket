<script lang="ts" setup>
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridPreDestroyedEvent, GridReadyEvent } from 'ag-grid-community'
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import ChampionGridIcon from './chart-comps/ChampionGridIcon.vue'
import PatchCellRenderer from './chart-comps/PatchCellRenderer.vue'

const { champions } = defineProps<{
  champions: any[]
}>()

defineExpose({
  PatchCellRenderer,
  ChampionGridIcon,
})

const cs = useChampStore()
const theme = ref(pocketTheme)
const championList = computed (() => champions)
console.log('💠 - championList:', championList.value)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<any[]> = {
  rowData: championList.value,
  columnHoverHighlight: false,

  rowSelection: {
    mode: 'multiRow',
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  },

  defaultColGroupDef: {
    suppressStickyLabel: true,

  },
  defaultColDef: {
    flex: 1,
    minWidth: 50,
    // autoHeaderHeight: true,
    // wrapHeaderText: true,
    headerClass: ['champion-grid-header', 'text-center'],
    cellClass: ['champion-grid-cell'],
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
    /*     headerComponentParams: {
      innerHeaderComponent: CustomInnerHeader,
    }, */

    // resizable: false,
  },
}

const colDefs: ColDef<any>[] = [
  {
    headerName: '',
    field: '',
    cellRenderer: ChampionGridIcon,
    cellClass: '!py-1 !pr-1 !ml-0',
    sortable: false,
    width: 61,
    maxWidth: 61,
    minWidth: 61,
    pinned: 'left',
  },

  {
    field: 'champion',
    headerName: 'Champion',
    cellDataType: 'text',
    maxWidth: 90,
    sortable: false,
    cellClass: 'font-medium  ',
    headerClass: '',
  },
  {
    field: 'winrate',
    headerName: 'Winrate',
    cellDataType: 'number',
    maxWidth: 80,
    valueFormatter: params => `${Math.round(params.value * 100) / 100}%`,
    cellClass: 'font-medium  ',
    headerClass: '',
  },
  {
    field: 'bayesianWinrate',
    headerName: 'Adj. WR',
    cellDataType: 'number',
    maxWidth: 80,
    valueFormatter: params => `${Math.round(params.value * 100) / 100}%`,
    cellClass: 'font-medium  ',
    headerClass: '',
  },
  {
    field: 'games',
    headerName: '#',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'wins',
    headerName: 'Win',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'losses',
    headerName: 'Lose',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'avgKills',
    headerName: 'K',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'avgDeaths',
    headerName: 'D',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'avgAssists',
    headerName: 'Games',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'kda',
    headerName: 'Ratio',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'avgKp',
    headerName: 'Games',
    cellDataType: 'number',
    maxWidth: 50,
    cellClass: 'font-medium',
  },
  {
    field: 'gamePatches',
    headerName: 'Patch',
    cellDataType: 'text',
    minWidth: 180,
    maxWidth: 180,
    cellClass: 'font-medium',
    cellRenderer: PatchCellRenderer,
  },

]

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  cs.championGridApi = gridApi.value
}

watch(
  () => championList.value,
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [...championList.value])
  },
)

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, RowSelectionModule, ColumnAutoSizeModule, ColumnHoverModule, ColumnHoverModule, ColumnApiModule, CellStyleModule, GridStateModule, RenderApiModule])
</script>

<template>
  <AgGridVue
    :initial-state="cs.dbChampionGridState"
    class="!size-full stat-grid champion-grid bg-b1 !shadow-black/3 !drop-shadow-black/3 border-shadow-sm     min-w-full "
    :grid-options="gridOptions"
    :theme="theme"
    :column-defs="colDefs"
    :tooltip-show-delay="400"
    @grid-ready="onGridReady">
  </AgGridVue>
</template>
