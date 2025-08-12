<script lang="ts" setup>
import type { ColDef, GridApi, GridOptions, GridPreDestroyedEvent, GridReadyEvent } from 'ag-grid-community'
import { CellStyleModule, ClientSideRowModelModule, ColumnApiModule, ColumnAutoSizeModule, ColumnHoverModule, GridStateModule, ModuleRegistry, RenderApiModule, RowSelectionModule, ValidationModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { pocketTheme } from 'components/table/theme/tableTheme'
import { itemsLite } from '~/data/items-lite'

definePageMeta({
  name: 'Item Stats',

  meta: {
    section: 'library',
    icon: 'bi:list-ul',
  },
})

const is = useItemStore()
const { filtered } = useItemFilter(is.itemFilter)
const theme = ref(pocketTheme)

const gridOptions: GridOptions<ItemLite> = {
  rowData: itemsLite.filter(i => filtered.value.includes(i.id)),
  columnHoverHighlight: true,

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
    minWidth: 63,
    cellClass: 'text-end grid justify-end size-full',
    sortingOrder: ['desc', 'asc', null],
    initialHide: false,
    resizable: false,
  },
}

const colDefs = [
  { field: 'id', headerName: '', cellRenderer: params => `<img src="/img/item/${params.value}.webp" class="size-12 aspect-square rounded-full drop-shadow-sm shadow-sm" />`, cellClass: '!py-1 !pr-1 !ml-0', sortable: false, width: 61, maxWidth: 61, minWidth: 61 },
  { field: 'name', headerName: 'Item', cellDataType: 'text', minWidth: 100, flex: 3, sortable: false, cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Item',
    },
  } },
  { field: 'stats.abilityHaste', headerName: 'Ability Haste', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ah',
    },
  } },
  { field: 'stats.abilityPower', headerName: 'Ability Power', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ap',
    },
  } },
  { field: 'stats.armor', headerName: 'Armor', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armor',
    },
  } },
  { field: 'stats.armorPenetration', headerName: 'Armor Pen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armpen',
    },
  } },
  { field: 'stats.attackDamage', headerName: 'Attack Damage', flex: 1.2, minWidth: 60, cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ad',
    },
  } },
  { field: 'stats.attackSpeed', headerName: 'Attack Speed', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'as',
    },
  } },
  { field: 'stats.criticalStrikeChance', headerName: 'Critical Chance', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'crit',
    },
  } },
  { field: 'stats.goldPer10', headerName: 'Gold per 10', cellDataType: 'number', hide: true, headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gp10',
    },
  } },
  { field: 'stats.healAndShieldPower', headerName: 'Heal & Shield', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hsp',
    },
  } },
  { field: 'stats.health', headerName: 'Health', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp',
    },
  } },
  { field: 'stats.healthRegen', headerName: 'Health Regen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp5',
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
  {
    headerName: 'Magic Pen',
    cellDataType: 'text',

    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.mpen != null)
        return `${stats.percentMagicPenetration}%`
      if (stats.mpenflat != null)
        return `${stats.flatMagicPenetration}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mpen',
      },
    },
  },

  { field: 'stats.magicResistance', headerName: 'Magic Resist', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mr',
    },
  } },
  { field: 'stats.mana', headerName: 'Mana', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mana',
    },
  } },
  { field: 'stats.manaRegen', headerName: 'Mana Regen', cellDataType: 'number', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mp5',
    },
  } },
  {
    headerName: 'Move Speed',
    cellDataType: 'text',

    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.ms != null)
        return `${stats.percentMovespeed}%`
      if (stats.msflat != null)
        return `${stats.flatMovespeed}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ms',
      },
    },
  },
  { field: 'cost', headerName: 'Shop Price', cellDataType: 'number', flex: 1.5, minWidth: 71, cellClass: 'pr-6 text-right', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gold',
    },
  } },
]
const gridApi = shallowRef<GridApi | null>(null)

// const listener = event => is.dbItemStatListKey++

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  is.itemGridApi = gridApi.value

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    // col.addEventListener('visibleChanged', listener)
  })
}

function onGridPreDestroyed(params: GridPreDestroyedEvent) {
  is.dbItemGridState = gridApi.value.getState()

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    // col.removeEventListener('visibleChanged', listener)
  })
}

watch(
  () => filtered.value,
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [])
  },
)

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, RowSelectionModule, ColumnAutoSizeModule, ColumnHoverModule, ColumnHoverModule, ColumnApiModule, CellStyleModule, GridStateModule, RenderApiModule])
</script>

<template>
  <div>
    <AgGridVue
      :initial-state="is.dbItemGridState"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="h-full grow stat-grid pt-16"
      :tooltip-show-delay="400"
      @grid-pre-destroyed="onGridPreDestroyed"
      @grid-ready="onGridReady">
    </AgGridVue>
  </div>
</template>
