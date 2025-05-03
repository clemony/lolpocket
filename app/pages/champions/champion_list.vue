<script lang="ts" setup>
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridPreDestroyedEvent, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

definePageMeta({
  title: 'Champion List',
  path: '/champions/list',
  name: 'champions-list',
  section: 'champions',
})
const ds = useDataStore()
const cs = useChampStore()
const theme = ref(pocketTheme)
const championList = ref([])

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<Champion> = {
  rowData: ds.champions,
  columnHoverHighlight: true,

  autoSizeStrategy: {
    type: 'fitCellContents',
  },
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

const clvl = computed (() => cs.championGridLevel - 1)
const tlvl = computed (() => (0.7025 + 0.0175 * clvl.value))

watch(
  () => tlvl.value,
  (newVal) => {
    if (newVal)
      gridApi.value.refreshCells()
  },
)
const colDefs: (ColDef<Champion> | ColGroupDef<Champion>)[] = [
  {
    headerName: '　 Champion',
    cellClass: 'font-medium',
    children: [
      { field: 'id', headerName: '', cellRenderer: params => `<img src="/img/champion/${params.value}.webp" class="size-12 aspect-square rounded-full drop-shadow-sm shadow-sm" />`, cellClass: '!py-1 !pr-1 !ml-0', sortable: false, width: 61, maxWidth: 61, minWidth: 61, pinned: 'left' },

      { field: 'name', colId: 'champion', headerName: '', cellDataType: 'text', minWidth: 80, flex: 1.5, maxWidth: 100, sortable: false, pinned: 'left', cellClass: 'font-medium  ', headerClass: '' },
    ],
  },
  { headerName: 'Atk Dmg', groupId: 'ad', children: [
    {
      valueGetter: (params) => {
        return Math.round(params.data.stats?.attackdamage + params.data.stats?.attackdamageperlevel * clvl.value * tlvl.value)
      },
      cellClass: 'number-cell justify-end',
      headerName: 'AD',
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.attackdamageperlevel },
  ] },
  { headerName: 'Atk Spd', groupId: 'as', children: [
    {
      headerName: 'Base',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.attackspeed + params.data.stats?.attackspeedperlevel * clvl.value * tlvl.value) * 100) / 100
      },
      cellClass: 'number-cell justify-end',
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.attackspeedperlevel },
  ] },
  { headerName: 'Crit', cellClass: 'number-cell justify-end', groupId: 'crit', hide: true, children: [
    { hide: true, headerName: 'Base', valueGetter: (params) => {
      return (params.data.stats?.crit + params.data.stats?.critperlevel * clvl.value * tlvl.value) * 100 / 100
    } },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.critperlevel, hide: true },
  ] },
  { headerName: 'Health', groupId: 'hp', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.hp + params.data.stats?.hpperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.hpperlevel },
  ] },
  { headerName: 'HP Regen', groupId: 'hpregen', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.hpregen + params.data.stats?.hpregenperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.hpregenperlevel },
  ] },
  { headerName: 'Mana', groupId: 'mp', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.mp + params.data.stats?.mpperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.mpperlevel },
  ] },
  { headerName: 'MP Regen', groupId: 'mpregen', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.mpregen + params.data.stats?.mpregenperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.mpregenperlevel },
  ] },
  { headerName: 'Armor', groupId: 'armor', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.armor + params.data.stats?.armorperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.armorperlevel },
  ] },
  { headerName: 'MR', groupId: 'mr', children: [
    {
      headerName: 'Base',
      cellClass: 'number-cell justify-end',
      valueGetter: (params) => {
        return Math.round((params.data.stats?.spellblock + params.data.stats?.spellblockperlevel * clvl.value * tlvl.value) * 100) / 100
      },
    },
    { columnGroupShow: 'open', cellClass: 'hidden-cell bg-b2/40 number-cell justify-end', maxWidth: 60, headerName: '🡱', headerClass: 'bg-b2/40', valueGetter: params => params.data.stats?.spellblockperlevel },
  ] },
  {
    headerName: 'Range',
    maxWidth: 70,
    flex: 1,
    children: [
      {
        valueGetter: params => params.data.stats?.attackrange,
        headerName: 'Base',
      },
    ],
  },
  { headerName: 'Movespeed', children: [
    {
      valueGetter: params => params.data.stats?.movespeed,
      headerName: 'Base',
    },
  ] },
  {
    headerName: 'Resource',
    children: [
      { field: 'partype', colId: 'resource', headerName: '', flex: 1, cellDataType: 'text', minWidth: 70, cellClass: 'text-cell' },
    ],
  },
  {
    headerName: 'Roles',
    children: [
      {
        headerName: 'Primary',
        flex: 2,
        minWidth: 80,
        valueGetter: params => params.data.tags?.[0] ?? '',
        cellClass: 'text-cell capitalize',

      },
      {
        headerName: 'Secondary',
        flex: 2,
        minWidth: 84,
        cellClass: 'text-cell capitalize',
        valueGetter: params => params.data.tags?.[1] ?? '',

      },
    ],
  },
]
const listener = event => cs.dbChampionStatListKey++

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  cs.championGridApi = gridApi.value

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    col.addEventListener('visibleChanged', listener)
  })
}

function onGridPreDestroyed(params: GridPreDestroyedEvent) {
  cs.dbChampionGridState = gridApi.value.getState()

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    col.removeEventListener('visibleChanged', listener)
  })
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
  <NuxtLayout name="champions-layout">
    <AgGridVue
      :initial-state="cs.dbChampionGridState"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="!size-full stat-grid champion-grid pt-18"
      :tooltip-show-delay="400"
      @grid-pre-destroyed="onGridPreDestroyed"
      @grid-ready="onGridReady">
    </AgGridVue>
  </NuxtLayout>
</template>
