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
import TableDate from 'components/table/components/TableDate.vue'
import TableChampion from 'components/table/components/TableChampion.vue'
import TableLink from 'components/table/components/TableLink.vue'
import TableKey from 'components/table/components/TableKey.vue'
import RemoveFromTrash from 'components/table/components/RemoveFromTrash.vue'
import GridNoRows from 'components/table/components/TrashIsEmptyOverlay.vue'

const emit = defineEmits(['update:gridApi'])

definePageMeta({
  path: '/pockets/trash',
  title: 'Trash',
})

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
  RemoveFromTrash,
})

const ps = usePocketStore()
const ds = useDataStore()
const theme = ref(pocketTheme)

const rowData = ref<pocket[] | null>([...ps.trashFolder])

const pocketData = ref(null)
const selectData = ref(null)
const gridApi = shallowRef<GridApi | null>(null)

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  ps.trashGridApi = gridApi.value
  emit('update:gridApi', gridApi.value)
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
  rowHeight: 70,
  autoSizeStrategy: {
    type: 'fitGridWidth',
  },
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
    field: '',
    headerName: '',
    cellRenderer: RemoveFromTrash,
    width: 71,
    cellClass: '',
    suppressMovable: true,
    headerClass: [''],
  },
  {
    field: 'icon',
    headerName: 'Icon',
    cellRenderer: TableIcon,
    sortable: false,
    cellClass: '!pointer-events-none',
    cellRendererParams: { location: 'trash' },
    valueGetter: p => p.data.icon,
    width: 71,
    suppressMovable: true,
    headerClass: ['ml-3 pt-1'],

  },

  {
    field: 'name',
    headerName: 'Name',
    cellRenderer: TableLink,
    width: 180,
    cellClass: 'font-medium  pointer-events-none',
    suppressMovable: true,
    headerClass: [''],
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
])

const getRowId = ref<GetRowIdFunc>((params: GetRowIdParams) =>
  String(params.data.key),
)

watch(ps.trashFolder, (newValue, oldValue) => {
  if (newValue) {
    gridApi.value.setGridOption('rowData', ps.trashFolder)
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
  <div class="size-full relative">
    <AgGridVue
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="trash-grid size-full  rounded-2xl  pocket-grid"
      :tooltip-show-delay="400"
      :no-rows-overlay-component="GridNoRows"
      :row-data="rowData"
      :get-row-id="getRowId"
      row-class="!bg-b2/40 !border-b-b3/50 opacity-70"
      @grid-ready="onGridReady"
      @cell-mouse-over="onMouseEnter($event)"
      @cell-context-menu="handleClick($event)">
    </AgGridVue>

    <div class="absolute px-7 flex items-center w-full bg-b1 h-8 z-500 top-14 left-0 text-bc text-3">
      <span class="grow dst">Remove from trash to edit or view full pocket.</span>

    </div>
  </div>
</template>

