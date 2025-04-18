<script lang="ts" setup>
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import type { ColDef, GridApi, GridOptions, GridPreDestroyedEvent, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

definePageMeta({
  title: 'Item List',
  path: '/items/list',
  name: 'item-list',
  section: 'items',
})

const is = useItemStore()
const theme = ref(pocketTheme)
const itemList = ref([...filterDbItems()])

const gridOptions: GridOptions<Item> = {
  rowData: itemList.value,
  columnHoverHighlight: true,

  autoSizeStrategy: {
    type: 'fitGridWidth',
    defaultMinWidth: 50,
  },
  rowSelection: {
    mode: 'multiRow',
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  },

  defaultColDef: {
    flex: 1,
    autoHeaderHeight: true,
    wrapHeaderText: true,
    minWidth: 50,
    cellClass: 'text-end grid justify-end size-full',
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
    /*     headerComponentParams: {
      innerHeaderComponent: CustomInnerHeader,
    }, */

  resizable: false,
  },
}

const colDefs: ColDef<Item>[] = [
  { field: 'id', headerName: '', cellRenderer: params => `<img src="/img/item/${params.value}.webp" class="size-12 aspect-square rounded-full drop-shadow-sm shadow-sm" />`, cellClass: '!py-1 !pr-1 !ml-0', sortable: false, width: 61, maxWidth: 61, minWidth: 61, pinned: 'left' },
  { field: 'name', headerName: 'Item', cellDataType: 'text', minWidth: 100, flex: 3, sortable: false, pinned: 'left', cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Item',
    },
  } },
  { field: 'stats.ad', headerName: 'Attack Damage', flex: 1.2, minWidth: 60, cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ad',
    },
  } },
  { field: 'stats.ah', headerName: 'Ability Haste', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ah',
    },
  } },
  { field: 'stats.ap', headerName: 'Ability Power', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ap',
    },
  } },
  { field: 'stats.armor', headerName: 'Armor', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armor',
    },
  } },
  { field: 'stats.armpen', headerName: 'Armor Pen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armpen',
    },
  } },
  { field: 'stats.as', headerName: 'Attack Speed', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'as',
    },
  } },
  { field: 'stats.crit', headerName: 'Critical Chance', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'crit',
    },
  } },
  { field: 'stats.gp10', headerName: 'Gold per 10', cellDataType: 'number', hide: true, headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gp10',
    },
  } },
  { field: 'stats.hp', headerName: 'Health', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp',
    },
  } },
  { field: 'stats.hp5', headerName: 'Health Regen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp5',
    },
  } },
  { field: 'stats.hsp', headerName: 'Heal & Shield', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hsp',
    },
  } },
  { field: 'stats.lethality', headerName: 'Lethality', headerClass: 'break-none truncate', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'lethality',
    },
  } },
  { field: 'stats.lifesteal', headerName: 'Lifesteal', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'lifesteal',
    },
  } },
  { field: 'stats.mana', headerName: 'Mana', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mana',
    },
  } },
  { field: 'stats.mp5', headerName: 'Mana Regen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mp5',
    },
  } },
  {
    headerName: 'Magic Pen',
    cellDataType: 'text',

    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.mpen != null)
        return `${stats.mpen}%`
      if (stats.mpenflat != null)
        return `${stats.mpenflat}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mpen',
      },
    },
  },

  { field: 'stats.mr', headerName: 'Magic Resist', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mr',
    },
  } },
  {
    headerName: 'Move Speed',
    cellDataType: 'text',

    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.ms != null)
        return `${stats.ms}%`
      if (stats.msflat != null)
        return `${stats.msflat}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ms',
      },
    },
  },
  { field: 'gold.total', headerName: 'Shop Price', cellDataType: 'number', flex: 1.5, minWidth: 71, cellClass: 'pr-6 text-right', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gold',
    },
  } },
]
const gridApi = shallowRef<GridApi | null>(null)

const listener = event => is.dbItemStatListKey++

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  is.itemGridApi = gridApi.value

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    col.addEventListener('visibleChanged', listener)
  })
}

function onGridPreDestroyed(params: GridPreDestroyedEvent) {
  is.dbItemGridState = gridApi.value.getState()

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    col.removeEventListener('visibleChanged', listener)
  })
}

watch(
  () => filterDbItems(),
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [...filterDbItems()])
  },
)

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, RowSelectionModule, ColumnAutoSizeModule, ColumnHoverModule, ColumnHoverModule, ColumnApiModule, CellStyleModule, GridStateModule, RenderApiModule])
</script>

<template>
  <NuxtLayout
    name="header-layout" class=" pt-18" >
    <AgGridVue
      :initial-state="is.dbItemGridState"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="size-full stat-grid"
      :tooltip-show-delay="400"
      @grid-pre-destroyed="onGridPreDestroyed"
      @grid-ready="onGridReady">
    </AgGridVue>
  </NuxtLayout>
</template>
