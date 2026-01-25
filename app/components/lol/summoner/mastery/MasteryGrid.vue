<script lang="ts" setup>
import type {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community'
import {
  CellStyleModule,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnApiModule,
  ColumnAutoSizeModule,
  ColumnHoverModule,
  GridStateModule,
  ModuleRegistry,
  RenderApiModule,
  RowSelectionModule,
  RowStyleModule,
  TooltipModule,
  ValidationModule,
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

const { champions } = defineProps<{
  champions: ChampionStatsAndMastery[]
}>()

const theme = ref(masteryGridTheme)

const gridApi = shallowRef<GridApi | null>(null)
const prevRows = shallowRef<ChampionStatsAndMastery[]>([])

watch(
  () => champions,
  (next) => {
    if (!gridApi.value)
      return

    const prev = prevRows.value
    if (prev === next)
      return

    const prevMap = new Map(prev.map(r => [r.championId, r]))
    const nextMap = new Map(next.map(r => [r.championId, r]))

    const add: ChampionStatsAndMastery[] = []
    const update: ChampionStatsAndMastery[] = []
    const remove: ChampionStatsAndMastery[] = []

    for (const row of next) {
      if (!prevMap.has(row.championId))
        add.push(row)
      else update.push(row)
    }

    for (const row of prev) {
      if (!nextMap.has(row.championId))
        remove.push(row)
    }

    if (add.length || update.length || remove.length) {
      gridApi.value.applyTransaction({ add, remove, update })
      gridApi.value.refreshClientSideRowModel('sort')
    }

    prevRows.value = next
  },
  { flush: 'post' }
)

const gridOptions: GridOptions<Partial<ChampionStatsAndMastery> & Partial<ChampionMastery>> = {
  ...globalGridOptions,
  hidePaddedHeaderRows: true,
  animateRows: true,
  colResizeDefault: 'shift',
  columnHoverHighlight: false,
  defaultColDef: {
    initialHide: false,
    minWidth: 50,
    cellClass: 'items-center px-0 text-center! justify-center h-full! flex self-center font-semibold',
    cellClassRules: {
      'opacity-10': params => params.value === 0 || params.value === '0',
    },
    flex: 1,
    headerClass: 'p-0! [&_.ag-header-cell-text]:text-center! [&_.ag-header-cell-text]:mx-auto! h-8',
    sortingOrder: ['desc', 'asc', null],
    wrapHeaderText: true,
  },
  getRowId: p => String(p.data.championId),
  rowClassRules: {
    'opacity-0': () => false,
  },
  rowHeight: 50,
}

const colDefs: (ColDef<ChampionStatsAndMastery> | ColGroupDef<ChampionStatsAndMastery>)[] = useStatGrid()

function onGridReady(params: GridReadyEvent) {
  gridApi.value = params.api
  prevRows.value = champions
  params.api.applyTransaction({ add: champions })
}

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowStyleModule,
  ClientSideRowModelApiModule,
  ValidationModule,
  RowSelectionModule,
  ColumnAutoSizeModule,
  ColumnHoverModule,
  ColumnHoverModule,
  ColumnApiModule,
  TooltipModule,
  CellStyleModule,
  GridStateModule,
  RenderApiModule,
])
</script>

<template>
  <AgGridVue
    v-if="champions"
    data-theme="neutral line"
    class="mx-auto min-h-screen w-full self-start"
    :tooltip-show-delay="100"
    :grid-options="gridOptions"

    :theme="theme"
    dom-layout="autoHeight"
    :column-defs="colDefs"
    @grid-ready="onGridReady"
  />
</template>
