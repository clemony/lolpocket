<script lang="ts" setup>
import type {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community'
import { ChampionIcon } from '#components'
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
  TooltipModule,
  ValidationModule
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { masteryGridTheme } from '~/utils/config/masteryTheme'

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()

const theme = ref(masteryGridTheme)

const gridApi = shallowRef<GridApi | null>(null)

const gridOptions: GridOptions<Player> = {
  columnHoverHighlight: false,
  defaultColDef: {
    initialHide: false,
    minWidth: 66,
    autoHeaderHeight: true,
    cellClass: [''],
    flex: 1,
    headerClass: ['sticky top-0'],
    sortingOrder: ['desc', 'asc', null],
    wrapHeaderText: false,
  },
  rowData: match.participants,
  rowHeight: 38,
  tooltipShowMode: 'whenTruncated',
}

const colDefs: (ColDef<Player> | ColGroupDef<Player>)[] = [
  {
    cellRenderer: ChampionIcon,
    field: 'championId',
    headerName: '',
    tooltipValueGetter: (params: any) => `${params.riotIdGameName} #${params.riotIdTagline}`
  },
  {
    children: [
      { field: 'kills', headerName: 'Kills', headerTooltip: 'Kills' },
      { field: 'deaths', headerName: 'Deaths', headerTooltip: 'Deaths' },
      { field: 'assists', headerName: 'Assists', headerTooltip: 'Assists' },
      { field: 'challenges.kda', headerName: 'KDA', headerTooltip: 'KDA' },
      { field: 'challenges.killParticipation', headerName: 'Kill Participation', headerTooltip: 'Kill Participation' }
    ],
    headerName: ''
  },
  {
    children: [
      { field: 'totalDamageDealtToChampions', headerName: 'Damage to Champions', headerTooltip: 'Damage to Champions', },
      { field: 'challenges.teamDamagePercentage', headerName: 'Team Dmg %', headerTooltip: 'Team Dmg %' }
    ],
    headerName: 'Damage',
    headerTooltip: 'Damage'
  },
  {
    children: [
      { field: 'challenges.effectiveHealAndShielding', headerName: 'Effective Healing & Shielding', headerTooltip: 'Effective Healing & Shielding' }
    ],
    headerName: 'Teamplay',
    headerTooltip: 'Teamplay'
  },
]

async function onGridReady(params: GridReadyEvent) {
  await params.api
  gridApi.value = params.api
}

watch(
  () => '',
  (newVal) => {
    if (newVal && gridApi.value)
      gridApi.value.setGridOption('rowData', [])
  }
)

/* onMounted (async () => {
  if (params.img) {
    ix().loadTitles()
    champKey.value = await ix().champKeyById(params.data.id)
  }
})
 */
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule,
  RowSelectionModule,
  ColumnAutoSizeModule,
  ColumnHoverModule,
  ColumnHoverModule,
  TooltipModule,
  ColumnApiModule,
  CellStyleModule,
  GridStateModule,
  RenderApiModule,
])

const masteryGrid = useTemplateRef<HTMLElement>('masteryGrid')
</script>

<template>
  <AgGridVue
    v-if="match"
    ref="masteryGrid"
    class="mastery-grid w-full h-[100vh] sticky min-h-[100vh] w-full pt-20 top-20 [&_.ag-center-cols-viewport]:mx-auto [&_.ag-center-cols-viewport]:max-w-[1100px] [&_.ag-header-container]:mx-auto"

    :tooltip-show-delay="400"
    :grid-options="gridOptions"
    :theme="theme"
    :column-defs="colDefs"
    @grid-ready="onGridReady" />
</template>
