import type { ColDef, ColGroupDef } from 'ag-grid-community'
import { perGameFormatter, perGameGetter, statGetter } from '.'

const GridLastPlayed = resolveComponent('GridLastPlayed')
const GridMasteryPoints = resolveComponent('GridMasteryPoints')
const MasteryBadge = resolveComponent('MasteryBadge')
const TableChampion = resolveComponent('TableChampion')

export function useChampionStatGrid() {
  const killStats = [
    { bold: true, field: 'kills', label: 'Total', tooltip: 'Kills' },
  ] as const

  const killGroup: ColGroupDef = {
    children: killStats.map((s, i) => ({
      width: 56,
      cellClass: 'text-center',
      cellDataType: 'number',
      columnGroupShow: i === 0 ? undefined : 'open',
      field: s.field,
      headerClass:
        'h-8! max-h-8! min-h-8! row-span-1! -translate-y-1 row-start-2! text-start [&_.ag-header-cell-resize]:after:-translate-y-3!',
      headerName: s.label,
      headerTooltip: s.tooltip,
      valueFormatter: perGameFormatter(s.field),
      valueGetter: perGameGetter(s.field),
      wrapHeaderText: false,
    })),
    headerName: 'Kills',
    openByDefault: false,
  }

  const numericPerGameColumn = <K extends keyof ChampionStatsAndMastery>(
    k: K,
    headerName: string,
    tooltip: string,
    className = 'text-center'
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 56,
    cellClass: className,
    cellDataType: 'number',
    field: k,
    headerName,
    headerTooltip: tooltip,
    valueFormatter: perGameFormatter(k),
    valueGetter: perGameGetter(k),
  })

  const plainNumber = <K extends keyof ChampionStatsAndMastery>(
    k: K,
    headerName: string,
    tooltip: string,
    className = 'text-center'
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 60,
    cellClass: className,
    cellDataType: 'number',
    field: k,
    headerName,
    headerTooltip: tooltip,
  })

  const averagedNumber = <K extends keyof ChampionStatsAndMastery>(
    k: K,
    headerName: string,
    tooltip: string,
    className = 'text-center'
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 60,
    cellClass: className,
    cellDataType: 'number',
    field: k,
    headerName,
    headerTooltip: tooltip,
    valueGetter: statGetter(k),
  })

  /*   @click="${handleNav(params.data.championId)}"
  function handleNav(championId: number) {

  } */

  const championIdColumn: ColDef<ChampionStatsAndMastery> = {
    cellClass: '*!px-0 items-center !flex ',
    cellRenderer: TableChampion,
    colId: 'champion',
    field: 'championId',
    flex: 2,
    headerClass:
      'items-center !flex  [&_.ag-header-cell-comp-wrapper]:!h-5 [&_.ag-header-cell-text]:!mt-px ',
    headerName: 'Champion',
    headerTooltip: 'Champion',
    valueFormatter: params => champNameById(params.data.championId),
  }

  const kpColumn: ColDef<ChampionStatsAndMastery> = {
    width: 70,
    cellClass: 'text-center',
    cellDataType: 'number',
    field: 'kp',
    headerName: 'KP',
    headerTooltip: 'Kill Participation',
    valueGetter: statGetter('kp'),
  }

  const winrateColumn: ColDef<ChampionStatsAndMastery> = {
    width: 90,
    cellClass: 'text-center',
    cellDataType: 'number',
    field: 'wins',
    headerName: 'WR',
    headerTooltip: 'Winrate',
    valueFormatter: p =>
      p.data?.games
        ? `${Math.round((p.data.wins / p.data.games) * 1000) / 10}%`
        : '',
  }

  const masteryPointsColumn: ColDef<ChampionStatsAndMastery> = {
    minWidth: 80,
    width: 90,
    cellDataType: 'number',
    cellRenderer: GridMasteryPoints,
    cellRendererParams: {
      level: params => params.data?.level,
      pointsSinceLevel: params => params.data?.pointsSinceLevel,
      pointsUntilLevel: params => params.data?.pointsUntilLevel,
      totalPoints: params => params.data?.totalPoints,
    },
    colId: 'points',
    field: 'totalPoints',
    headerName: 'Level',
    headerTooltip: 'Level & Points',
  }

  const badgeColumn: ColDef<ChampionStatsAndMastery> = {
    minWidth: 80,
    width: 90,
    cellClass: '!grid place-items-center',
    cellDataType: 'number',
    cellRenderer: MasteryBadge,
    colId: 'level',
    field: 'level',
    headerName: 'Badge',
    headerTooltip: 'Badge',
  }

  const lastPlayedColumn: ColDef<ChampionStatsAndMastery> = {
    width: 160,
    cellClass: 'font-medium justify-end! justify-items-end text-end px-0!',
    cellDataType: 'text',
    cellRenderer: GridLastPlayed,
    field: 'lastPlayed',
    headerName: 'Last Played',
    headerTooltip: 'Last Played',
  }

  const spacerColumn = {
    flex: 2,
    headerName: '',
    sortable: false,
    suppressMovable: true,
  }

  return [
    spacerColumn,
    championIdColumn,
    //   killGroup,
    averagedNumber('kills', 'Kills', 'Kills'),
    averagedNumber(
      'deaths',
      'Deaths',
      'Deaths',
      'text-center text-shade-domination/15'
    ),
    averagedNumber('assists', 'Assists', 'Assists'),
    kpColumn,
    plainNumber('wins', 'Win', 'Wins'),
    plainNumber(
      'losses',
      'Loss',
      'Losses',
      'text-center text-shade-domination/15'
    ),
    plainNumber('games', 'Total Games', 'Total Games'),
    winrateColumn,
    masteryPointsColumn,
    badgeColumn,
    lastPlayedColumn,

    { ...spacerColumn, headerClass: '[&_.ag-header-cell-resize]:hidden!' },
  ]
}
