<script lang="ts" setup>
import type { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community'
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

definePageMeta({
  name: 'Item Stats',
  icon: 'bi:list-ul',
})

const theme = ref(pocketTheme)

const gridOptions: GridOptions<ItemLite> = {
  columnHoverHighlight: true,
  defaultColDef: {
    initialHide: false,
    minWidth: 63,
    autoHeaderHeight: true,
    cellClass: 'text-end grid justify-end size-full',
    flex: 1,
    resizable: false,
    wrapHeaderText: true,
    sortingOrder: ['desc', 'asc', null],
  },
  // rowData: itemsLite.filter(i => is().filtered.includes(i.id)),
  rowSelection: {
    checkboxes: false,
    enableClickSelection: true,
    headerCheckbox: false,
    mode: 'multiRow',
  },
}

const colDefs = [
  {
    maxWidth: 61,
    minWidth: 61,
    width: 61,
    cellClass: '!py-1 !pr-1 !ml-0',
    cellRenderer: params =>
      `<img src="/img/items/${params.value}.webp" class="size-12 aspect-square rounded-full drop-shadow-sm shadow-sm" />`,
    field: 'id',
    headerName: '',
    sortable: false,
  },
  {
    minWidth: 100,
    cellClass: 'font-medium  ',
    cellDataType: 'text',
    field: 'name',
    flex: 3,
    headerName: 'Item',
    sortable: false,
    headerComponentParams: {
      innerHeaderComponentParams: {
        name: 'Item',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.abilityHaste',
    headerName: 'Ability Haste',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ah',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.abilityPower',
    headerName: 'Ability Power',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ap',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.armor',
    headerName: 'Armor',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'armor',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.armorPenetration',
    headerName: 'Armor Pen',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'armpen',
      },
    },
  },
  {
    minWidth: 60,
    cellDataType: 'number',
    field: 'stats.attackDamage',
    flex: 1.2,
    headerName: 'Attack Damage',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ad',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.attackSpeed',
    headerName: 'Attack Speed',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'as',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.criticalStrikeChance',
    headerName: 'Critical Chance',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'crit',
      },
    },
  },
  {
    hide: true,
    cellDataType: 'number',
    field: 'stats.goldPer10',
    headerName: 'Gold per 10',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'gp10',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.healAndShieldPower',
    headerName: 'Heal & Shield',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hsp',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.health',
    headerName: 'Health',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hp',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.healthRegen',
    headerName: 'Health Regen',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hp5',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.lethality',
    headerClass: 'break-none truncate',
    headerName: 'Lethality',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'lethality',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.lifesteal',
    headerName: 'Lifesteal',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'lifesteal',
      },
    },
  },
  {
    cellDataType: 'text',
    headerName: 'Magic Pen',
    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.mpen !== null) return `${stats.percentMagicPenetration}%`
      if (stats.mpenflat !== null) return `${stats.flatMagicPenetration}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mpen',
      },
    },
  },

  {
    cellDataType: 'number',
    field: 'stats.magicResistance',
    headerName: 'Magic Resist',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mr',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.mana',
    headerName: 'Mana',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mana',
      },
    },
  },
  {
    cellDataType: 'number',
    field: 'stats.manaRegen',
    headerName: 'Mana Regen',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mp5',
      },
    },
  },
  {
    cellDataType: 'text',
    headerName: 'Move Speed',
    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.ms !== null) return `${stats.percentMovespeed}%`
      if (stats.msflat !== null) return `${stats.flatMovespeed}`
      return ''
    },
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ms',
      },
    },
  },
  {
    minWidth: 71,
    cellClass: 'pr-6 text-right',
    cellDataType: 'number',
    field: 'cost',
    flex: 1.5,
    headerName: 'Shop Price',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'gold',
      },
    },
  },
]
const gridApi = shallowRef<GridApi | null>(null)

// const listener = event => is().dbItemStatListKey++

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  is().itemGridApi = gridApi.value

  const columns = gridApi.value.getColumns()
  columns.forEach((col) => {
    // col.addEventListener('visibleChanged', listener)
  })
}

watch(
  () => is().filtered,
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
  <div>
    <AgGridVue
      class="stat-grid h-full grow pt-16"
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      :tooltip-show-delay="400"
      @grid-ready="onGridReady" />
  </div>
</template>
