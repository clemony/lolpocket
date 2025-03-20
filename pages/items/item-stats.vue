<script lang="ts" setup>
import type { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { CustomTooltip } from 'components/table/components/customTooltip'
import 'tippy.js/animations/scale.css'

definePageMeta({
  title: 'Item Stats',
  path: '/items/stats',
  name: 'item-stats',

})

const is = useItemStore()
const theme = ref(pocketTheme)
const ds = useDataStore()
const items = ds.SRitems || []
const itemList = [...items]

const cellClass = []
const gridOptions: GridOptions<Item> = {
  rowData: itemList,
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

  /*  getRowId: (params: number) => {
    return params.data.id
  }, */
  defaultColDef: {
    width: 50,
    minWidth: 50,
    cellClass: 'cell-class',
    initialHide: false,
    /*     headerComponentParams: {
      innerHeaderComponent: CustomInnerHeader,
    }, */
    resizable: false,
    tooltipComponent: CustomTooltip,
  },
}

const colDefs: ColDef<Item>[] = [
  { field: 'id', headerName: '', cellRenderer: params => `<img src="/img/item/${params.value}.webp" class="size-full aspect-square rounded-full shadow-sm" />`, cellClass: '!py-1 !pr-1 !pl-3', sortable: false, width: 51, maxWidth: 51, minWidth: 51 },
  { field: 'name', cellDataType: 'text', width: 140, sortable: false, cellClass: 'font-medium  ', headerComponentParams: {
    innerHeaderComponentParams: {
      displayName: 'Item',
    },
  } },
  { field: 'stats.ad', headerName: 'ad', cellDataType: 'number', headerTooltip: 'Attack Damage', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ad',
    },
  } },
  { field: 'stats.ah', headerName: 'ah', cellDataType: 'number', headerTooltip: 'Ability Haste', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ah',
    },
  } },
  { field: 'stats.ap', headerName: 'ap', cellDataType: 'number', headerTooltip: 'Ability Power', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ap',
    },
  } },
  { field: 'stats.armor', headerName: 'armor', cellDataType: 'number', headerTooltip: 'Armor', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armor',
    },
  } },
  { field: 'stats.armpen', headerName: 'apen', cellDataType: 'number', headerTooltip: 'Armor Pen', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'armpen',
    },
  } },
  { field: 'stats.as', headerName: 'as', cellDataType: 'number', headerTooltip: 'Attack Speed', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'as',
    },
  } },
  { field: 'stats.crit', headerName: 'crit', cellDataType: 'number', headerTooltip: 'Critical Strike', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'crit',
    },
  } },
  { field: 'stats.gp10', headerName: 'gp/10', cellDataType: 'number', headerTooltip: 'Gold / 10s', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gp10',
    },
  } },
  { field: 'stats.hp', headerName: 'hp', cellDataType: 'number', headerTooltip: 'Health', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp',
    },
  } },
  { field: 'stats.hp5', headerName: 'hp/5', cellDataType: 'number', headerTooltip: 'Health Regen / 5s', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hp5',
    },
  } },
  { field: 'stats.hsp', headerName: 'hsp', cellDataType: 'number', headerTooltip: 'Heal & Shield Power', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'hsp',
    },
  } },
  { field: 'stats.lethality', headerName: 'lty', cellDataType: 'number', headerTooltip: 'Lethality', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'lethality',
    },
  } },
  { field: 'stats.lifesteal', headerName: 'ls', cellDataType: 'number', headerTooltip: 'Lifesteal', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'lifesteal',
    },
  } },
  { field: 'stats.mana', headerName: 'mana', cellDataType: 'number', headerTooltip: 'Mana', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mana',
    },
  } },
  { field: 'stats.mp5', headerName: 'mp/5', cellDataType: 'number', headerTooltip: 'Mana Regen / 5s', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mp5',
    },
  } },
  { field: 'stats.mpen', headerName: 'mpen %', cellDataType: 'number', headerTooltip: 'Magic Pen', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mpen',
    },
  } },
  { field: 'stats.mpenflat', headerName: 'mpen', cellDataType: 'number', headerTooltip: 'Flat Magic Pen', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mpenflat',
    },
  } },
  { field: 'stats.mr', headerName: 'mr', cellDataType: 'number', headerTooltip: 'Magic Resist', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'mr',
    },
  } },
  { field: 'stats.ms', headerName: 'ms %', cellDataType: 'number', headerTooltip: 'Movespeed', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'ms',
    },
  } },
  { field: 'stats.msflat', headerName: 'ms', cellDataType: 'number', headerTooltip: 'Flat Movespeed', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'msflat',
    },
  } },
  { field: 'buy', headerName: 'cost', cellDataType: 'number', headerTooltip: 'Buy Price', headerComponentParams: {
    innerHeaderComponentParams: {
      icon: 'gold',
    },
  } },
]

const gridApi = shallowRef<GridApi | null>(null)
async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
  is.itemGridApi = gridApi.value
}
ModuleRegistry.registerModules([AllCommunityModule])
defineExpose({
})
</script>

<template>
  <NuxtLayout
    name="header-layout" class="px-10 pt-46">
    <AgGridVue
      :grid-options="gridOptions"
      :theme="theme"
      :column-defs="colDefs"
      class="size-full border-t border-b2 stat-grid"
      :tooltip-show-delay="400"

      @grid-ready="onGridReady">
    </AgGridVue>
  </NuxtLayout>
</template>

