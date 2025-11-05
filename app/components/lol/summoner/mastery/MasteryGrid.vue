<script lang="ts" setup>
import type {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community'
import { ChampionGridIcon, GridLastPlayed, GridMasteryPoints } from '#components'
import { useScroll } from '@vueuse/core'
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
import { masteryGridTheme } from '~/utils/config/masteryTheme'

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
  columnHoverHighlight: false,
  defaultColDef: {
    initialHide: false,
    minWidth: 66,
    autoHeaderHeight: true,
    cellClass: [''],
    flex: 1,
    headerClass: ['sticky top-0'],
    sortingOrder: ['desc', 'asc', null],
    wrapHeaderText: false,
  },
  rowData: mastery,
  rowHeight: 68,
}

const colDefs: (ColDef<ChampionMastery> | ColGroupDef<ChampionMastery>)[] = [
  {
    maxWidth: 360,
    minWidth: 180,
    width: 360,
    cellClass: 'py-2 !px-0',
    cellDataType: 'number',
    cellRenderer: ChampionGridIcon,
    cellRendererParams: {
      img: true,
    },
    colId: 'rank',
    field: 'level',
    headerName: 'Rank',
    valueGetter: params => params.data.level,
  },

  {
    cellClass: 'text-bc !flex !flex-col justify-center size-full text-start',
    cellDataType: 'text',
    cellRenderer: params =>
      `<h3 class="dst mb-1 font-bold ">${ix().champNameById(params.data.id)}</h3><p class="italic text-2 font-medium text-bc/90">${ix().getChampionTitle(ix().champKeyById(params.data.id))}</p>`,
    colId: 'champion',
    field: 'id',
    headerClass:
      'items-center !flex [&_.ag-header-cell-comp-wrapper]:!h-5 [&_.ag-header-cell-text]:!mt-px ',
    headerName: 'Champion',
    valueFormatter: params => ix().champNameById(params.data.id),
  },
  {
    cellClass: 'font-medium  ',
    cellDataType: 'text',
    cellRenderer: GridLastPlayed,
    colId: 'lastPlayed',
    field: 'lastPlayed',
    headerClass: '',
    headerName: 'Last Played',
  },
  {
    cellClass: 'font-medium  text-left',
    cellDataType: 'number',
    cellRenderer: GridMasteryPoints,
    cellRendererParams: {
      totalPoints: summoner.mastery.totalPoints,
    },
    colId: 'points',
    field: 'points',
    headerClass: '',
    headerName: 'Points',
  },
  {
    maxWidth: 80,
    width: 80,
    cellClass: '!grid place-items-center',
    cellDataType: 'number',
    cellRenderer: params =>
      `<div class="size-10 text-4 font-semibold leading-none  grid place-items-center tracking-wide text-nc inset-shadow-sm inset-shadow-b4/20 shadow-sm drop-shadow-sm bg-linear-to-br from-neutral/80 to-neutral/90  rounded-full">${params.data.level}</div>`,
    colId: 'level',
    field: 'level',
    headerName: 'Level',
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
  }
)

/* onMounted (async () => {
  if (params.img) {
    ix().loadTitles()
    champKey.value = await ix().champKeyById(params.data.id)
  }
})
 */
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

const masteryGrid = useTemplateRef<HTMLElement>('masteryGrid')
const { arrivedState } = useScroll(masteryGrid)

watch(
  () => arrivedState.top,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
</script>

<template>
  <AgGridVue
    v-if="mastery"
    ref="masteryGrid"
    class="mastery-grid w-full h-[100vh] sticky min-h-[100vh] w-full pt-20 top-20 [&_.ag-center-cols-viewport]:mx-auto [&_.ag-center-cols-viewport]:max-w-[1100px] [&_.ag-header-container]:mx-auto"
    :class="
      cn('', {
        '**:!overflow-auto': arrivedState.top,
        ' **:!overflow-hidden': !arrivedState.top,
      })
    "
    :tooltip-show-delay="400"
    :grid-options="gridOptions"
    :theme="theme"
    :column-defs="colDefs"
    @grid-ready="onGridReady" />
</template>
