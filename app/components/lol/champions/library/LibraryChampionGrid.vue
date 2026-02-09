<script lang="ts" setup>
import type {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridPreDestroyedEvent,
  GridReadyEvent,
} from 'ag-grid-community'
import ChampionGridIcon from '#components'
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

definePageMeta({
  name: 'Champion Stats',
  icon: 'bi:list-ul',
  section: 'library',
})

defineExpose({
  ChampionGridIcon,
})

/* const { filteredKeys, filtered } = useChampionFilter(filters) */

const filteredChamps = ref([])
// todo
const gridApi = shallowRef<GridApi | null>(null)
/* const filteredChamps = computed<ChampionLite[]>(() => championsLite.filter(c => filteredKeys.value.includes(c.key))) */

const gridOptions: GridOptions<ChampionLite> = {
  columnHoverHighlight: true,
  rowData: filteredChamps.value,
  defaultColDef: {
    initialHide: false,
    minWidth: 66,
    autoHeaderHeight: true,
    flex: 1,
    wrapHeaderText: true,
    cellClass: ['champion-grid-cell', '!text-right', '!justify-end', '!px-4'],
    headerClass: ['champion-grid-header', 'h-full', 'items-end'],
    sortingOrder: ['desc', 'asc', null],
  },
  defaultColGroupDef: {
    suppressStickyLabel: true,
  },
  rowSelection: {
    checkboxes: false,
    enableClickSelection: true,
    headerCheckbox: false,
    mode: 'multiRow',
  },
}

watch(
  () => cs().championGridLevel,
  (newVal) => {
    if (newVal && gridApi.value) gridApi.value.refreshCells()
  }
)

watch(
  () => cs().championGridType,
  (newVal) => {
    if (newVal && gridApi.value) gridApi.value.refreshCells()
  }
)

const { resolveStat } = useChampionStatGrowth(
  computed(() => cs().championGridLevel ?? 1)
)

const colDefs: (ColDef<ChampionLite> | ColGroupDef<ChampionLite>)[] = [
  {
    maxWidth: 64,
    minWidth: 64,
    width: 64,
    cellClass: '!py-1 !pr-1 !ml-0',
    cellRenderer: ChampionGridIcon,
    headerName: '　 ',
    pinned: 'left',
    sortable: false,
  },

  {
    maxWidth: 100,
    minWidth: 80,
    cellClass: 'font-medium  text-left',
    cellDataType: 'text',
    colId: 'champion',
    field: 'name',
    flex: 1.5,
    headerClass: '',
    headerName: 'Champion',
    pinned: 'left',
    sortable: false,
  },
  /*
  {
    headerName: 'Health',
    valueGetter: params => resolveStat(params.data.stats?.health),
  },
  {
    headerName: 'Health Regen',
    valueGetter: params =>
      resolveStat(params.data.stats?.healthRegen, { roundTo: 2 }),
  },
  {
    headerName: 'Mana',
    valueGetter: params => resolveStat(params.data.stats?.mana),
  },
  {
    headerName: 'Mana Regen',
    valueGetter: params =>
      resolveStat(params.data.stats?.manaRegen, { roundTo: 2 }),
  },
  {
    headerName: 'Armor',
    valueGetter: params => resolveStat(params.data.stats?.armor),
  },
  {
    headerName: 'Magic Resist',
    valueGetter: params => resolveStat(params.data.stats?.magicResistance),
  },
  {
    headerName: 'Attack Damage',
    valueGetter: params => resolveStat(params.data.stats?.attackDamage),
  },
  {
    headerName: 'Attack Speed',
    valueGetter: (params) => {
      const { attackSpeed, attackSpeedRatio } = params.data.stats
      return resolveStat(attackSpeed, {
        ratio: attackSpeedRatio.flat,
        roundTo: 3,
        type: 'attackSpeed',
      })
    },
  }, */
  /*    { headerName: 'Crit',
cellClass: 'number-cell justify-end',
groupId: 'crit',
hide: true,
children: [
    { hide: true,
headerName: 'Base',
valueGetter: (params) => {
      return (params.data.stats?.crit + params.data.stats?.critperLevel)) * 100 / 100
    } },
    { columnGroupShow: 'open',
cellClass: 'hidden-cell bg-p2/40 number-cell justify-end',
maxWidth: 60,
headerName: '🡱',
headerClass: 'bg-p2/40',
valueGetter: params => params.data.stats?.critperLevel,
hide: true },
  ] }, */

  /*  {
    flex: 1,
    headerName: 'Range',
    valueGetter: params => params.data.stats?.attackRange.flat,
  },
  {
    headerName: 'Move Speed',
    valueGetter: params => params.data.stats?.movespeed.flat,
  }, */
  {
    minWidth: 90,
    colId: 'resource',
    field: 'resource',
    flex: 1.5,
    headerName: 'Resource',
  },

  {
    minWidth: 90,
    flex: 1.5,
    headerName: 'Position',
    valueGetter: params => params.data?.positions?.[0] ?? '',
  },
  {
    minWidth: 90,
    flex: 1.5,
    headerName: 'Role',
    valueGetter: params => params.data?.roles?.[0] ?? '',
  },
  {
    headerName: 'Ability Reliance',
    valueGetter: params => params.data?.attributeRatings?.abilityReliance ?? 0,
  },

  {
    headerName: 'Control',
    valueGetter: params => params.data?.attributeRatings?.control ?? 0,
  },
  {
    headerName: 'Damage',
    valueGetter: params => params.data?.attributeRatings?.damage ?? 0,
  },

  {
    headerName: 'Difficulty',
    valueGetter: params => params.data?.attributeRatings?.difficulty ?? 0,
  },

  {
    headerName: 'Mobility',
    valueGetter: params => params.data?.attributeRatings?.mobility ?? 0,
  },

  {
    headerName: 'Tough- ness',
    valueGetter: params => params.data?.attributeRatings?.toughness ?? 0,
  },
  {
    headerName: 'Utility',
    valueGetter: params => params.data?.attributeRatings?.utility ?? 0,
  },
]
const listener = (event: any) => {
  void event
  cs().dbChampionStatListKey++
}

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  cs().championGridApi = gridApi.value

  const columns = gridApi.value.getColumns()
  columns?.forEach((col) => {
    col.addEventListener('visibleChanged', listener as any)
  })
}

function onGridPreDestroyed(params: GridPreDestroyedEvent) {
  if (!gridApi.value) return
  cs().dbChampionGridState = gridApi.value.getState()

  const columns = gridApi.value.getColumns()
  columns?.forEach((col) => {
    col.removeEventListener('visibleChanged', listener as any)
  })
}

watch(
  () => '',
  (newVal) => {
    if (newVal && gridApi.value) gridApi.value.setGridOption('rowData', [])
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
  <article class="relative h-full grow overflow-y-auto">
    <!--  <AgGridVue
      v-if="filtered"
      class="!size-full stat-grid champion-grid mt-38 border-t border-t-p3/40 "
      :tooltip-show-delay="400"
      :initial-state="cs().dbChampionGridState"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      @grid-pre-destroyed="onGridPreDestroyed"
      @grid-ready="onGridReady" /> -->
  </article>
</template>
