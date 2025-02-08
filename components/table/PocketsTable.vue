<script lang="ts" setup>
import type { ColDef, ColGroupDef, GetRowIdFunc, GetRowIdParams, GridApi, GridOptions, GridReadyEvent, MouseEnterEvent } from 'ag-grid-community'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import TableIcon from 'components/table/components/TableIcon.vue'
import TableSpell from 'components/table/components/TableSpell.vue'
import TableTags from 'components/table/components/TableTags.vue'
import TableItem from 'components/table/components/TableItem.vue'
import TableRune from 'components/table/components/TableRune.vue'
import TableRole from 'components/table/components/TableRole.vue'
import TableChampion from 'components/table/components/TableChampion.vue'
import TableLink from 'components/table/components/TableLink.vue'
import TableKey from 'components/table/components/TableKey.vue'
import GridNoRows from 'components/table/components/NoPocketsOverlay.vue'

defineExpose({
  TableIcon,
  TableLink,
  TableSpell,
  TableKey,
  GridNoRows,
  TableRune,
  TableChampion,
  TableItem,
  TableTags,
  TableRole,
})

const ps = usePocketStore()
const theme = ref(pocketTheme)

const rowData = ref<pocket[] | null>([...ps.pockets])

const pocketData = ref(null)
const selectData = ref(null)

const gridApi = shallowRef<GridApi | null>(null)

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  ps.pocketApi = gridApi.value
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

const gridOptions: GridOptions<pocket> = {
  columnHoverHighlight: false,
  autoSizeStrategy: {
    type: 'fitGridWidth',
    defaultMinWidth: 51,
  },
  rowHeight: 70,
  rowSelection: {
    mode: 'multiRow',
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  },
  /* rowClassRules: {
  '!bg-b2': (params) => {
    const cell =  ref(selectData.value)
    return cell.value && params.data.key === cell.value.key
    }
}, */
  defaultColDef: {
    width: 51,
    minWidth: 51,
    //suppressHeaderMenuButton: true,
    cellClass: 'cell-class py-2 items-center',
    initialHide: false,
    //suppressHeaderFilterButton: true,
    resizable: false,
  },
  defaultColGroupDef: {
    marryChildren: true,
  },
}
const colDefs = ref<(ColDef | ColGroupDef)[]>([
  { field: 'icon', headerName: '', cellRenderer: TableIcon, sortable: false, valueGetter: p => p.data.icon },
  { field: 'name', cellRenderer: TableLink, width: 140, sortable: false, cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Pocket',
    },
  } },
  {
    headerName: 'Role',
    children: [
      { field: '', headerName: '', sortable: false, valueGetter: p => p.data.roles[0], cellRenderer: TableRole },
      { field: '', sortable: false, width: 10, suppressMovable: true },
    ],
  },
  {
    headerName: 'Champions',
    children: [
      { field: '', valueGetter: p => p.data.champions.children[0], cellRenderer: TableChampion },
      { field: '', valueGetter: p => p.data.champions.children[1], cellRenderer: TableChampion },
      { field: '', valueGetter: p => p.data.champions.children[2], cellRenderer: TableChampion },
      { field: '', sortable: false, width: 10, suppressMovable: true },
    ],
  },
  {
    headerName: 'Items',
    children: [
      { field: '1', headerName: '', valueGetter: p => p.data.items.sets[0].items[0], cellRenderer: TableItem },
      { field: '2', headerName: '', valueGetter: p => p.data.items.sets[0].items[1], cellRenderer: TableItem },
      { field: '3', headerName: '', valueGetter: p => p.data.items.sets[0].items[2], cellRenderer: TableItem },
      { field: '4', headerName: '', valueGetter: p => p.data.items.sets[0].items[3], cellRenderer: TableItem },
      { field: '5', headerName: '', valueGetter: p => p.data.items.sets[0].items[4], cellRenderer: TableItem },
      { field: '6', headerName: '', valueGetter: p => p.data.items.sets[0].items[5], cellRenderer: TableItem },
      { field: '', sortable: false, width: 10, suppressMovable: true },
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
  pocketData.value = event.node.data
}
</script>

<template>
  <PocketContextMenu class="size-full" :pocket-data="pocketData" @update:grid="refreshGrid()">
    <AgGridVue
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="size-full  rounded-2xl   px-12 "
      :tooltip-show-delay="400"
      :no-rows-overlay-component="GridNoRows"
      :row-data="rowData"
      :get-row-id="getRowId"
      @click.right="handleRightClick()"
      @cell-mouse-over="onMouseEnter($event)"
      @grid-ready="onGridReady"
    >
    </AgGridVue>
  </PocketContextMenu>
</template>

<style>
</style>