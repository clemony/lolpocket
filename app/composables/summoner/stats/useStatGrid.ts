import {
  GridLastPlayed,
  GridMasteryPoints,
  MasteryBadge,
  TableChampion,
} from "#components"
import type { ColDef, ColGroupDef } from "ag-grid-community"

export function useStatGrid() {
  const perGameGetter =
    <K extends keyof AggregatedStats>(field: K) =>
    (p: any) =>
      p.data?.games ? p.data[field] / p.data.games : null
  const perGameFormatter =
    <K extends keyof AggregatedStats>(field: K) =>
    (p: any) =>
      p.data?.games ?
        (Math.round((p.data[field]! / p.data.games) * 10) / 10).toString()
      : ""
  const percentPerGameFormatter =
    <K extends keyof AggregatedStats>(field: K) =>
    (p: any) =>
      p.data?.games ?
        `${Math.round((p.data[field]! / p.data.games) * 1000) / 10}%`
      : ""

  const killStats = [
    { field: "kills", label: "Total", tooltip: "Kills", bold: true },
    { field: "killingSprees", label: "Sprees", tooltip: "Killing sprees" },
    { field: "doubleKills", label: "Double kills", tooltip: "Double kills" },
    { field: "tripleKills", label: "Triple kills", tooltip: "Triple kills" },
    { field: "quadraKills", label: "Quadra kills", tooltip: "Quadra kills" },
    { field: "pentaKills", label: "Penta kills", tooltip: "Penta kills" },
  ] as const

  const killGroup: ColGroupDef = {
    headerName: "Kills",
    openByDefault: false,
    children: killStats.map((s, i) => ({
      width: 56,
      cellDataType: "number",
      field: s.field,
      headerName: s.label,
      headerTooltip: s.tooltip,
      columnGroupShow: i === 0 ? undefined : "open",
      cellClass: "text-center",
      headerClass:
        "h-8! max-h-8! min-h-8! row-span-1! -translate-y-1 row-start-2! text-start [&_.ag-header-cell-resize]:after:-translate-y-3!",
      valueGetter: perGameGetter(s.field),
      valueFormatter: perGameFormatter(s.field),
      wrapHeaderText: false,
    })),
  }

  const numericPerGameColumn = <K extends keyof AggregatedStats>(
    field: K,
    headerName: string,
    tooltip: string,
    className = "text-center"
  ): ColDef<AggregatedStats> => ({
    width: 56,
    cellDataType: "number",
    field,
    headerName,
    headerTooltip: tooltip,
    cellClass: className,
    valueGetter: perGameGetter(field),
    valueFormatter: perGameFormatter(field),
  })

  const plainNumber = <K extends keyof AggregatedStats>(
    field: K,
    headerName: string,
    tooltip: string,
    className = "text-center"
  ): ColDef<AggregatedStats> => ({
    width: 60,
    cellDataType: "number",
    field,
    headerName,
    headerTooltip: tooltip,
    cellClass: className,
  })

  /*   @click="${handleNav(params.data.championId)}"
  function handleNav(championId: number) {

  } */

  const championIdColumn: ColDef<AggregatedStats> = {
    cellClass: "*!px-0 items-center !flex ",
    cellRenderer: TableChampion,
    colId: "champion",
    field: "championId",
    flex: 2,
    headerClass:
      "items-center !flex  [&_.ag-header-cell-comp-wrapper]:!h-5 [&_.ag-header-cell-text]:!mt-px ",
    headerName: "Champion",
    headerTooltip: "Champion",
    valueFormatter: (params) => champNameById(params.data.championId),
  }

  const kpColumn: ColDef<AggregatedStats> = {
    width: 70,
    cellDataType: "number",
    field: "kp",
    headerName: "KP",
    headerTooltip: "Kill Participation",
    cellClass: "text-center",
    valueGetter: perGameGetter("kp"),
    valueFormatter: percentPerGameFormatter("kp"),
  }

  const winrateColumn: ColDef<AggregatedStats> = {
    width: 90,
    cellDataType: "number",
    field: "wins",
    headerName: "WR",
    headerTooltip: "Winrate",
    cellClass: "text-center",
    valueFormatter: (p) =>
      p.data?.games ?
        `${Math.round((p.data.wins / p.data.games) * 1000) / 10}%`
      : "",
  }

  const masteryPointsColumn: ColDef<AggregatedStats> = {
    minWidth: 80,
    width: 90,
    cellDataType: "number",
    cellRenderer: GridMasteryPoints,
    cellRendererParams: {
      level: (params) => params.data?.level,
      pointsSinceLevel: (params) => params.data?.pointsSinceLevel,
      pointsUntilLevel: (params) => params.data?.pointsUntilLevel,
      totalPoints: (params) => params.data?.totalPoints,
    },
    colId: "points",
    field: "totalPoints",
    headerName: "Level",
    headerTooltip: "Level & Points",
  }

  const badgeColumn: ColDef<AggregatedStats> = {
    minWidth: 80,
    width: 90,
    cellClass: "!grid place-items-center",
    cellDataType: "number",
    cellRenderer: MasteryBadge,
    colId: "level",
    field: "level",
    headerName: "Badge",
    headerTooltip: "Badge",
  }

  const lastPlayedColumn: ColDef<AggregatedStats> = {
    width: 160,
    cellClass: "font-medium justify-end! justify-items-end text-end px-0!",
    cellDataType: "text",
    cellRenderer: GridLastPlayed,
    field: "lastPlayed",
    headerName: "Last Played",
    headerTooltip: "Last Played",
  }

  const spacerColumn = {
    flex: 2,
    headerName: "",
    sortable: false,
    suppressMovable: true,
  }

  return [
    spacerColumn,
    championIdColumn,
    //   killGroup,
    numericPerGameColumn("kills", "Kills", "Kills"),
    numericPerGameColumn(
      "deaths",
      "Deaths",
      "Deaths",
      "text-center text-shade-domination/15"
    ),
    numericPerGameColumn("assists", "Assists", "Assists"),
    kpColumn,
    plainNumber("wins", "Win", "Wins"),
    plainNumber(
      "losses",
      "Loss",
      "Losses",
      "text-center text-shade-domination/15"
    ),
    plainNumber("games", "Total Games", "Total Games"),
    winrateColumn,
    masteryPointsColumn,
    badgeColumn,
    lastPlayedColumn,

    { ...spacerColumn, headerClass: "[&_.ag-header-cell-resize]:hidden!" },
  ]
}
