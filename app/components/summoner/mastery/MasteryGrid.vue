<script lang="ts" setup>
import { ChampionGridIcon, GridLastPlayed, GridMasteryPoints } from '#components'
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community'
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { masteryGridTheme } from '../../table/theme/masteryTheme'

const { mastery, summoner } = defineProps<{
  mastery: ChampionMastery[]
  summoner: Summoner
}>()

defineExpose({
  ChampionGridIcon,
  GridLastPlayed,
  GridMasteryPoints,
})

const theme = ref(masteryGridTheme)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<ChampionMastery> = {
  rowData: mastery,
  columnHoverHighlight: false,
  rowHeight: 68,

  defaultColDef: {
    flex: 1,
    minWidth: 66,

    autoHeaderHeight: true,
    wrapHeaderText: false,
    headerClass: ['sticky top-0'],
    cellClass: [''],
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
  },
}

const colDefs: (ColDef<ChampionMastery> | ColGroupDef<ChampionMastery>)[] = [

  {
    field: 'level',
    headerName: 'Rank',
    cellClass: 'py-2 !px-0',
    cellRenderer: ChampionGridIcon,
    valueGetter: params => params.data.level,
    cellRendererParams: {
      img: true,
    },
    cellDataType: 'number',
    width: 360,
    maxWidth: 360,
    minWidth: 180,
  },

  {
    field: 'id',
    colId: 'champion',
    cellRenderer: params => `<h3 class="dst mb-1 font-bold ">${ix().champNameById(params.data.id)}</h3><p class="italic text-2 font-medium text-bc/90">${ix().getChampionTitle(ix().champKeyById(params.data.id))}</p>`,
    valueFormatter: params => ix().champNameById(params.data.id),
    headerName: 'Champion',
    headerClass: 'items-center !flex [&_.ag-header-cell-comp-wrapper]:!h-5 [&_.ag-header-cell-text]:!mt-px ',
    cellDataType: 'text',
    cellClass: 'text-bc !flex !flex-col justify-center size-full text-start',
  },
  {
    field: 'lastPlayed',
    colId: 'lastPlayed',
    cellRenderer: GridLastPlayed,
    headerName: 'Last Played',
    cellDataType: 'text',
    cellClass: 'font-medium  ',
    headerClass: '',
  },
  {
    field: 'points',
    colId: 'points',
    cellRenderer: GridMasteryPoints,
    cellRendererParams: {
      totalPoints: summoner.mastery.totalPoints,
    },
    headerName: 'Points',
    cellDataType: 'number',
    cellClass: 'font-medium  text-left',
    headerClass: '',
  },
  {
    field: 'level',
    colId: 'level',
    headerName: 'Level',
    cellRenderer: params => `<div class="size-10 text-4 font-semibold leading-none  grid place-items-center tracking-wide text-nc inset-shadow-sm inset-shadow-b4/20 shadow-sm drop-shadow-sm bg-linear-to-br from-neutral/80 to-neutral/90  rounded-full">${params.data.level}</div>`,
    cellDataType: 'number',
    cellClass: '!grid place-items-center',
    width: 80,
    maxWidth: 80,
  },
]

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
}

watch(
  () => '',
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [])
  },
)

/* onMounted (async () => {
  if (params.img) {
    ix().loadTitles()
    champKey.value = await ix().champKeyById(params.data.id)
  }
})
 */
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, RowSelectionModule, ColumnAutoSizeModule, ColumnHoverModule, ColumnHoverModule, ColumnApiModule, CellStyleModule, GridStateModule, RenderApiModule])
</script>

<template>
  <article class="overflow-y-auto grow relative h-full relative mastery-grid">
    <AgGridVue
      v-if="mastery"
      dom-layout="autoHeight"
      class=""
      :tooltip-show-delay="400"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      @grid-ready="onGridReady" />
  </article>
</template>
