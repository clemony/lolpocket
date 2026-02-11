import type {
  ColDef,
  ValueFormatterParams,
  ValueGetterParams,
} from "ag-grid-community"
//
import {
  GridLastPlayed,
  GridMasteryPoints,
  MasteryBadge,
  TableChampion,
} from "#components"
import { perGameFormatter, perGameGetter, statGetter } from "."

export function useStatGrid() {
  const numericPerGameColumn = <K extends keyof ChampionStatsAndMastery>(
    f: K,
    headerName: string,
    tooltip: string,
    className = "text-center"
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 56,
    cellClass: className,
    cellDataType: "number",
    field: f,
    headerName,
    headerTooltip: tooltip,
    valueFormatter: perGameFormatter(f),
    valueGetter: perGameGetter(f),
  })

  const plainNumber = <K extends keyof ChampionStatsAndMastery>(
    f: K,
    headerName: string,
    tooltip: string,
    className = "text-center"
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 60,
    cellClass: className,
    cellDataType: "number",
    field: f,
    headerName,
    headerTooltip: tooltip,
  })

  const averagedNumber = <K extends keyof ChampionStatsAndMastery>(
    f: K,
    headerName: string,
    tooltip: string,
    className = "text-center"
  ): ColDef<ChampionStatsAndMastery> => ({
    width: 60,
    cellClass: className,
    cellDataType: "number",
    field: f,
    headerName,
    headerTooltip: tooltip,
    valueGetter: statGetter(f),
  })

  /*   @click="${handleNav(params.data.championId)}"
  function handleNav(championId: number) {

  } */

  const championIdColumn: ColDef<ChampionStatsAndMastery> = {
    cellClass: "*!px-0 items-center !flex ",
    cellRenderer: TableChampion,
    colId: "champion",
    field: "championId",
    flex: 2,
    headerClass:
      "items-center !flex  [&_.ag-header-cell-comp-wrapper]:!h-5 [&_.ag-header-cell-text]:!mt-px ",
    headerName: "Champion",
    headerTooltip: "Champion",
    valueFormatter: (
      params: ValueFormatterParams<ChampionStatsAndMastery>
    ) => champNameById(params.data?.championId ?? 0) ?? "",
  }

  const kpColumn: ColDef<ChampionStatsAndMastery> = {
    width: 70,
    cellClass: "text-center",
    cellDataType: "number",
    field: "kp",
    headerName: "KP",
    headerTooltip: "Kill Participation",
    valueGetter: statGetter("kp"),
  }

  const winrateColumn: ColDef<ChampionStatsAndMastery> = {
    width: 90,
    cellClass: "text-center",
    cellDataType: "number",
    field: "wins",
    headerName: "WR",
    headerTooltip: "Winrate",
    valueFormatter: (
      p: ValueFormatterParams<ChampionStatsAndMastery>
    ) => {
      const games = p.data?.games ?? 0
      const wins = p.data?.wins ?? 0
      return games ? `${Math.round((wins / games) * 1000) / 10}%` : ""
    },
  }

  const masteryPointsColumn: ColDef<ChampionStatsAndMastery> = {
    minWidth: 80,
    width: 90,
    cellDataType: "number",
    cellRenderer: GridMasteryPoints,
    colId: "points",
    field: "totalPoints",
    headerName: "Level",
    headerTooltip: "Level & Points",
    cellRendererParams: {
      level: (params: ValueGetterParams<ChampionStatsAndMastery>) =>
        params.data?.level,
      pointsSinceLevel: (params: ValueGetterParams<ChampionStatsAndMastery>) =>
        params.data?.pointsSinceLevel,
      pointsUntilLevel: (params: ValueGetterParams<ChampionStatsAndMastery>) =>
        params.data?.pointsUntilLevel,
      totalPoints: (params: ValueGetterParams<ChampionStatsAndMastery>) =>
        params.data?.totalPoints,
    },
  }

  const badgeColumn: ColDef<ChampionStatsAndMastery> = {
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

  const lastPlayedColumn: ColDef<ChampionStatsAndMastery> = {
    width: 160,
    cellClass: "font-medium justify-end! justify-items-end text-end px-0!",
    cellDataType: "text",
    cellRenderer: GridLastPlayed,
    field: "lastPlayed",
    headerName: "Last Played",
    headerTooltip: "Last Played",
  }

  const spacerColumn = {
    flex: 1,
    headerName: "",
    sortable: false,
    suppressMovable: true,
  }

  return [
    spacerColumn,
    championIdColumn,
    //   killGroup,
    averagedNumber("kills", "Kills", "Kills"),
    averagedNumber(
      "deaths",
      "Deaths",
      "Deaths",
      "text-center text-shade-domination/15"
    ),
    averagedNumber("assists", "Assists", "Assists"),
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
