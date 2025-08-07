<script lang="ts" setup>
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community'
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import ChampionGridIcon from 'components/analytics/charts/chart-comps/ChampionGridIcon.vue'
import { championTitleIndex } from 'data/index/champion-title-index'

const { mastery } = defineProps<{
  mastery: ChampionMastery[]
}>()

defineExpose({
  ChampionGridIcon,
})

const theme = ref(pocketTheme)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<ChampionMastery> = {
  rowData: mastery,
  columnHoverHighlight: false,
  rowHeight: 66,
  defaultColDef: {
    flex: 1,
    minWidth: 66,

    autoHeaderHeight: true,
    wrapHeaderText: true,
    headerClass: ['champion-grid-header', 'h-full', 'items-end'],
    cellClass: ['!text-right', '!justify-end', '!px-4'],
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
  },
}

const colDefs: (ColDef<ChampionMastery> | ColGroupDef<ChampionMastery>)[] = [
  {
    headerName: '　 ',
    cellClass: '!py-1 px-0 mx-0 items-center grid',
    cellRenderer: params => `<span class=" relative h-auto w-[64px] grid place-items-center"><img src="/img/mastery/banner/crest-and-banner-mastery-${params.data.level > 10 ? 10 : params.data.level}.webp"  class="shrink-0 translate-y-6 absolute object-cover drop-shadow-sm drop-shadow-black/15"/></span>`,
    width: 64,
    maxWidth: 84,
    minWidth: 64,
    resizable: false,
  },
  {
    headerName: 'id',
    cellClass: '!pr-1 py-0 !ml-0',
    cellRenderer: ChampionGridIcon,
    cellRendererParams: {
      img: true,
    },

    cellDataType: 'text',
    valueFormatter: params => ix().champNameById(params.data.id),
    width: 280,
    maxWidth: 280,
    minWidth: 110,
  },

  {
    field: 'id',
    colId: 'champion',
    headerName: 'Champion',
    cellDataType: 'text',
    cellClass: 'font-bold text-bc/90 text-8 text-left',
    headerClass: '',
  },
  {
    field: 'points',
    colId: 'points',
    valueFormatter: params => params.data.points.toLocaleString(),
    headerName: 'Points',
    cellDataType: 'number',
    cellClass: 'font-medium  text-left',
    headerClass: '',
  },
  {
    field: 'lastPlayed',
    colId: 'lastPlayed',
    valueFormatter: params => params.data.lastPlayed ? useDateFormat(params.data.lastPlayed, '🗓️  MMM DD, YYYY  -  h:mm a').value : '',
    headerName: 'Last Played',
    cellDataType: 'text',
    cellClass: 'font-medium  ',
    headerClass: '',
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

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, RowSelectionModule, ColumnAutoSizeModule, ColumnHoverModule, ColumnHoverModule, ColumnApiModule, CellStyleModule, GridStateModule, RenderApiModule])
</script>

<template>
  <article class="overflow-y-auto grow relative h-full relative">
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
