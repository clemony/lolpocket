<script lang="ts" setup>
import type {
  ColDef,
  GridApi,
  GridOptions,
  GridPreDestroyedEvent,
  GridReadyEvent,
} from 'ag-grid-community'
<<<<<<< HEAD
import { itemsLite } from '@appdata/records/items-lite'
=======
import { itemsLite } from '#shared/appdata/items-lite'
>>>>>>> refs/remotes/origin/main
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
import { pocketTheme } from '~/utils/config/tableTheme'

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
    sortingOrder: ['desc', 'asc', null],
    wrapHeaderText: true,
  },
  rowData: itemsLite.filter(i => is().filtered.includes(i.id)),
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
    headerComponentParams: {
      innerHeaderComponentParams: {
        name: 'Item',
      },
    },
    headerName: 'Item',
    sortable: false,
  },
  {
    cellDataType: 'number',
    field: 'stats.abilityHaste',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ah',
      },
    },
    headerName: 'Ability Haste',
  },
  {
    cellDataType: 'number',
    field: 'stats.abilityPower',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ap',
      },
    },
    headerName: 'Ability Power',
  },
  {
    cellDataType: 'number',
    field: 'stats.armor',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'armor',
      },
    },
    headerName: 'Armor',
  },
  {
    cellDataType: 'number',
    field: 'stats.armorPenetration',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'armpen',
      },
    },
    headerName: 'Armor Pen',
  },
  {
    minWidth: 60,
    cellDataType: 'number',
    field: 'stats.attackDamage',
    flex: 1.2,
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ad',
      },
    },
    headerName: 'Attack Damage',
  },
  {
    cellDataType: 'number',
    field: 'stats.attackSpeed',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'as',
      },
    },
    headerName: 'Attack Speed',
  },
  {
    cellDataType: 'number',
    field: 'stats.criticalStrikeChance',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'crit',
      },
    },
    headerName: 'Critical Chance',
  },
  {
    hide: true,
    cellDataType: 'number',
    field: 'stats.goldPer10',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'gp10',
      },
    },
    headerName: 'Gold per 10',
  },
  {
    cellDataType: 'number',
    field: 'stats.healAndShieldPower',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hsp',
      },
    },
    headerName: 'Heal & Shield',
  },
  {
    cellDataType: 'number',
    field: 'stats.health',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hp',
      },
    },
    headerName: 'Health',
  },
  {
    cellDataType: 'number',
    field: 'stats.healthRegen',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'hp5',
      },
    },
    headerName: 'Health Regen',
  },
  {
    cellDataType: 'number',
    field: 'stats.lethality',
    headerClass: 'break-none truncate',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'lethality',
      },
    },
    headerName: 'Lethality',
  },
  {
    cellDataType: 'number',
    field: 'stats.lifesteal',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'lifesteal',
      },
    },
    headerName: 'Lifesteal',
  },
  {
    cellDataType: 'text',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mpen',
      },
    },
    headerName: 'Magic Pen',
    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.mpen !== null)
        return `${stats.percentMagicPenetration}%`
      if (stats.mpenflat !== null)
        return `${stats.flatMagicPenetration}`
      return ''
    },
  },

  {
    cellDataType: 'number',
    field: 'stats.magicResistance',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mr',
      },
    },
    headerName: 'Magic Resist',
  },
  {
    cellDataType: 'number',
    field: 'stats.mana',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mana',
      },
    },
    headerName: 'Mana',
  },
  {
    cellDataType: 'number',
    field: 'stats.manaRegen',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'mp5',
      },
    },
    headerName: 'Mana Regen',
  },
  {
    cellDataType: 'text',
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'ms',
      },
    },
    headerName: 'Move Speed',
    valueGetter: (params) => {
      const stats = params.data?.stats ?? {}
      if (stats.ms !== null)
        return `${stats.percentMovespeed}%`
      if (stats.msflat !== null)
        return `${stats.flatMovespeed}`
      return ''
    },
  },
  {
    minWidth: 71,
    cellClass: 'pr-6 text-right',
    cellDataType: 'number',
    field: 'cost',
    flex: 1.5,
    headerComponentParams: {
      innerHeaderComponentParams: {
        icon: 'gold',
      },
    },
    headerName: 'Shop Price',
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
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [])
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
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
<<<<<<< HEAD
      class="stat-grid h-full grow pt-16"
=======
      class="h-full grow stat-grid pt-16"
>>>>>>> refs/remotes/origin/main
      :tooltip-show-delay="400"
      @grid-ready="onGridReady"></AgGridVue>
  </div>
</template>
