<script lang="ts" setup>
import type { ColDef, ColGroupDef, GetRowIdFunc, GetRowIdParams, GridApi, GridOptions, GridReadyEvent, MouseEnterEvent } from 'ag-grid-community'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import GridNoRows from 'components/table/components/NoPocketsOverlay.vue'
import TableChampion from 'components/table/components/TableChampion.vue'
import TableDate from 'components/table/components/TableDate.vue'
import TableIcon from 'components/table/components/TableIcon.vue'
import TableItem from 'components/table/components/TableItem.vue'
import TableKey from 'components/table/components/TableKey.vue'
import TableLink from 'components/table/components/TableLink.vue'
import TablePin from 'components/table/components/TablePin.vue'
import TableRole from 'components/table/components/TableRole.vue'
import TableRune from 'components/table/components/TableRune.vue'
import TableSpell from 'components/table/components/TableSpell.vue'
import TableTags from 'components/table/components/TableTags.vue'
import { pocketTheme } from 'components/table/theme/tableTheme'

defineExpose({
  TableIcon,
  TableLink,
  TableSpell,
  TableKey,
  GridNoRows,
  TableRune,
  TableChampion,
  TableItem,
  TableDate,
  TableTags,
  TableRole,
  TablePin,
})

const ps = usePocketStore()
const ds = useDataStore()
const theme = ref(pocketTheme)

const rowData = ref<Pocket[] | null>([...ps.pockets])

const pocketData = ref(null)
const selectData = ref(null)
const gridApi = shallowRef<GridApi | null>(null)

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  ps.pocketGridApi = gridApi.value
}

function handleRightClick() {
  selectData.value = pocketData.value
  nextTick(() => {
    gridApi.value.setGridOption('rowData', rowData.value)
  })
}

function refreshGrid() {
  selectData.value = null
  nextTick(() => {
    gridApi.value.setGridOption('rowData', rowData.value)
  })
}

const gridOptions: GridOptions<Pocket> = {
  columnHoverHighlight: false,
  rowHeight: 70,
  rowSelection: {
    mode: 'multiRow',
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  },
  /*    rowClassRules: {
  '!hidden': (params) => {return pinnedKeys.includes(params.data.key) ? true : false}
}, */
  defaultColDef: {
    width: 58,
    minWidth: 58,
    suppressHeaderMenuButton: true,
    cellClass: 'cell-class py-2 items-center',
    initialHide: false,
    suppressHeaderFilterButton: true,
    resizable: false,
    context: {
      group: false,
    },
  },
  defaultColGroupDef: {
    marryChildren: true,
    context: {
      group: true,
    },
  },
}
const colDefs = ref<(ColDef | ColGroupDef)[]>([
  {
    field: 'icon',
    headerName: 'Icon',
    cellRenderer: TableIcon,
    sortable: false,
    valueGetter: p => p.data.icon,
    width: 51,
    suppressMovable: true,
  },

  {
    field: 'name',
    headerName: 'Name',
    cellRenderer: TableLink,
    width: 180,
    cellClass: 'font-medium  ',
    suppressMovable: true,
  },
  {
    headerName: 'Role',
    groupId: 'Role',
    children: [
      {
        field: '',
        headerName: '',
        valueGetter: p => p.data.roles[0],
        cellRenderer: TableRole,
      },
      {
        field: '',
        width: 10,
        suppressMovable: true,
      },
    ],
  },
  {
    headerName: 'Champions',
    groupId: 'Champions',
    children: [
      {
        field: '',
        valueGetter: p => p.data.champions.children[0],
        cellRenderer: TableChampion,
      },
      {
        field: '',
        valueGetter: p => p.data.champions.children[1],
        cellRenderer: TableChampion,
      },
      {
        field: '',
        valueGetter: p => p.data.champions.children[2],
        cellRenderer: TableChampion,
      },
      { field: '', width: 10, suppressMovable: true },
    ],
  },
  {
    groupId: 'Items',
    headerName: 'Items',
    children: [
      {
        field: '1',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[0],
        cellRenderer: TableItem,
      },
      {
        field: '2',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[1],
        cellRenderer: TableItem,
      },
      {
        field: '3',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[2],
        cellRenderer: TableItem,
      },
      {
        field: '4',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[3],
        cellRenderer: TableItem,
      },
      {
        field: '5',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[4],
        cellRenderer: TableItem,
      },
      {
        field: '6',
        headerName: '',
        valueGetter: p => p.data.items.sets[0].items[5],
        cellRenderer: TableItem,
      },
      {
        field: '',
        width: 10,
        suppressMovable: true,
      },
    ],
  }, /*
  {
    headerName: 'Runes',
    children: [
      { field: 'Keystone', width: 60, cellRenderer: TableIcon,  },
      { field: 'Secondary', width: 60, cellRenderer: TableIcon,  },
      { field: '', sortable: false, width: 10, suppressMovable: true },
    ],
  }, */
  {
    headerName: 'Spells',
    groupId: 'Spells',
    children: [
      {
        field: 'D',
        headerComponentParams: {
          innerHeaderComponent: TableKey,
          innerHeaderComponentParams: {
            kbdKey: 'D',
          },
        },
        cellRenderer: TableSpell,
        valueGetter: p => p.data.spells[0],
      },

      {
        field: 'spells',
        headerComponentParams: {
          innerHeaderComponent: TableKey,
          cellRendererParams: { index: 1 },
          innerHeaderComponentParams: {
            kbdKey: 'F',
          },
        },
        cellRenderer: TableSpell,
        valueGetter: p => p.data.spells[1],
      },

      { field: '', sortable: false, width: 10, suppressMovable: true },
    ],
  },
  {
    field: 'tags',
    headerName: 'Tags',
    width: 140,
    cellRenderer: TableTags,
    valueGetter: p => p.data.tags,
  },
  {
    headerName: 'Updated',
    field: 'dateUpdated',
    width: 100,
    maxWidth: 200,
    minWidth: 50,
    cellRenderer: TableDate,
    valueFormatter: (params) => {
      const { date, time, patch } = params.value
      return `${patch}, ${date}, ${time}`
    },
    filterValueGetter: (params) => {
      const dateObj = params.data.dateUpdated[0]
      return `${dateObj.patch}, ${dateObj.date}, ${dateObj.time}`
    },
  },
  {
    headerName: 'Created',
    field: 'dateCreated',
    width: 100,
    maxWidth: 200,
    minWidth: 50,
    cellRenderer: TableDate,
    valueFormatter: (params) => {
      const { date, time, patch } = params.value
      return `${patch}, ${date}, ${time}`
    },
    filterValueGetter: (params) => {
      const dateObj = params.data.dateUpdated[0]
      return `${dateObj.patch}, ${dateObj.date}, ${dateObj.time}`
    },
  },
  {
    field: '',
    headerName: 'Pin',
    cellRenderer: TablePin,
    valueGetter: p => p.data.tags,
  },
])

const getRowId = ref<GetRowIdFunc>((params: GetRowIdParams) =>
  String(params.data.key),
)

watch(ps.pockets, (newValue, oldValue) => {
  if (newValue) {
    gridApi.value.setGridOption('rowData', ps.pockets)
  }
})

ModuleRegistry.registerModules([AllCommunityModule])

function onMouseEnter(event) {
  // console.log("💠 - onMouseEnter - event:", event)

}

function handleClick(event) {
  console.log('💠 - event:', event)
  event.node.setSelected(true)
  event.node.isSelected()
  pocketData.value = event.node.data
  // console.log('💠 - handleClick -  event.node.data:', event.node.data)
}

const pocketContextTarget = ref()
</script>

<template>
  <PocketContextMenu
    class="size-full"
    :pocket-data="pocketData"
    @update:grid="refreshGrid()">
    <AgGridVue
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class=".pocket-grid size-full  rounded-2xl   px-12 "
      :tooltip-show-delay="400"
      :no-rows-overlay-component="GridNoRows"
      :row-data="rowData"
      :get-row-id="getRowId"
      @grid-ready="onGridReady"
      @cell-mouse-over="onMouseEnter($event)"
      @cell-context-menu="handleClick($event)">
    </AgGridVue>
  </PocketContextMenu>
</template>

<style>
</style>