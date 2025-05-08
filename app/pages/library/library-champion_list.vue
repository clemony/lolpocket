<script lang="ts" setup>
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import type { ColDef, ColGroupDef, GridApi, GridOptions, GridPreDestroyedEvent, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

definePageMeta({
  title: 'Champion List',
  path: '/library/champion_list',
  name: 'champion-list',
  section: 'library',
})

const cs = useChampStore()
const theme = ref(pocketTheme)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<ChampionLite> = {
  columnHoverHighlight: true,
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
    minWidth: 66,
    autoHeaderHeight: true,
    wrapHeaderText: true,
    headerClass: ['champion-grid-header', 'h-full', 'items-end'],
    cellClass: ['champion-grid-cell', '!text-right', '!justify-end', '!px-4'],
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
  },
}

watch(
  () => cs.championGridLevel,
  (newVal) => {
    if (newVal)
      gridApi.value.refreshCells()
  },
)

watch(
  () => cs.championGridType,
  (newVal) => {
    if (newVal)
      gridApi.value.refreshCells()
  },
)

const { resolveStat } = useChampionStatGrowth(computed (() => cs.championGridLevel))

const colDefs: (ColDef<ChampionLite> | ColGroupDef<ChampionLite>)[] = [
  {
    headerName: '　 ',
    cellClass: '!py-1 !pr-1 !ml-0',
    field: 'key',
    cellRenderer: params => `<div class="size-12 aspect-square rounded-full drop-shadow-sm shadow-sm" ><div class="size-full overflow-hidden rounded-full" ><img src="/img/champion/${params.value}.webp" class="size-full scale-116" /></div></div>`,
    sortable: false,
    width: 64,
    maxWidth: 64,
    minWidth: 64,
    pinned: 'left',
  },

  {
    field: 'name',
    colId: 'champion',
    headerName: 'Champion',
    cellDataType: 'text',
    minWidth: 80,
    flex: 1.5,
    maxWidth: 100,
    sortable: false,
    pinned: 'left',
    cellClass: 'font-medium  text-left',
    headerClass: '',
  },

  {
    headerName: 'Health',
    valueGetter: params =>
      resolveStat(params.data.stats?.health),
  },
  {
    headerName: 'Health Regen',
    valueGetter: params =>
      resolveStat(params.data.stats?.healthRegen, { roundTo: 2 }),
  },
  {
    headerName: 'Mana',
    valueGetter: params =>
      resolveStat(params.data.stats?.mana),
  },
  {
    headerName: 'Mana Regen',
    valueGetter: params =>
      resolveStat(params.data.stats?.manaRegen, { roundTo: 2 }),
  },
  {
    headerName: 'Armor',
    valueGetter: params =>
      resolveStat(params.data.stats?.armor),
  },
  {
    headerName: 'Magic Resist',
    valueGetter: params =>
      resolveStat(params.data.stats?.magicResistance),
  },
  {
    headerName: 'Attack Damage',
    valueGetter: params =>
      resolveStat(params.data.stats?.attackDamage),
  },
  {
    headerName: 'Attack Speed',
    valueGetter: (params) => {
      const { attackSpeed, attackSpeedRatio } = params.data.stats
      return resolveStat(attackSpeed, {
        roundTo: 3,
        type: 'attackSpeed',
        ratio: attackSpeedRatio.flat,
      })
    },
  },
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
cellClass: 'hidden-cell bg-b2/40 number-cell justify-end',
maxWidth: 60,
headerName: '🡱',
headerClass: 'bg-b2/40',
valueGetter: params => params.data.stats?.critperLevel,
hide: true },
  ] }, */

  {
    headerName: 'Range',
    flex: 1,
    valueGetter: params => params.data.stats?.attackRange.flat,
  },
  {
    headerName: 'Move Speed',
    valueGetter: params => params.data.stats?.movespeed.flat,
  },
  {
    headerName: 'Resource',
    field: 'resource',
    colId: 'resource',
    flex: 1.5,
    minWidth: 90,
  },

  {
    headerName: 'Position',
    flex: 1.5,
    minWidth: 90,
    valueGetter: params => params.data.positions?.[0] ?? '',

  },
  {
    headerName: 'Role',
    flex: 1.5,
    minWidth: 90,
    valueGetter: params => params.data.roles?.[0] ?? '',

  },
  {
    headerName: 'Ability Reliance',
    valueGetter: params => params.data.attributeRatings.abilityReliance,
  },

  {
    headerName: 'Control',
    valueGetter: params => params.data.attributeRatings.control,
  },
  {
    headerName: 'Damage',
    valueGetter: params => params.data.attributeRatings.damage,
  },

  {
    headerName: 'Difficulty',
    valueGetter: params => params.data.attributeRatings.difficulty,
  },

  {
    headerName: 'Mobility',
    valueGetter: params => params.data.attributeRatings.mobility,
  },

  {
    headerName: 'Tough- ness',
    valueGetter: params => params.data.attributeRatings.toughness,
  },
  {
    headerName: 'Utility',
    valueGetter: params => params.data.attributeRatings.utility,
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
  <NuxtLayout v-slot="{ champions }" name="champions-layout" class="">
    <AgGridVue
      v-if="champions"

      class="!size-full stat-grid champion-grid mt-38 border-t border-t-b3/40 "
      :tooltip-show-delay="400"
      :initial-state="cs.dbChampionGridState"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      :row-data="champions as ChampionLite[]"
      @grid-pre-destroyed="onGridPreDestroyed"
      @grid-ready="onGridReady">
    </AgGridVue>
  </NuxtLayout>
</template>
