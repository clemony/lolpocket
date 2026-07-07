<script lang="ts" setup>
import { UUser } from "#components"
import type { TableColumn } from "@nuxt/ui"

const { champions } = storeToRefs(sData())

const columns: TableColumn<ChampionStats>[] = [
  {
    accessorKey: "championId",
    header: "Champion",
    cell: ({ row }) => {
      return h(UUser, {
        name: row.original.championName,
        description: row.original.role?.mostPlayed,
        avatar: {
          src: `/img/champion/${row.getValue("championId")}.webp`,
        },
        ui: {
          description: "capitalize",
          avatar: "drop-shadow-sm shadow-xs",
        },
      })
    },
  },
  {
    header: "Played",
    accessorKey: "games",
  },
  {
    header: "Win",
    accessorKey: "win",
    cell: ({ row }) => {
      return `${row.original.win}W`
    },
  },

  {
    header: "Loss",
    accessorKey: "loss",
    cell: ({ row }) => {
      return `${row.original.loss}L`
    },
  },
  {
    accessorKey: "kills.average",
    header: "Kills",
  },
  {
    accessorKey: "deaths.average",
    header: "Deaths",
  },
  {
    accessorKey: "assists.average",
    header: "Assists",
  },
  {
    accessorKey: "kda",
    header: "KDA",
  },
  {
    accessorKey: "kp.average",
    header: "KP",
  },
  {
    header: "Winrate",
    cell: ({ row }) => {
      return roundDecimalToPercent(row.original.win / row.original.games, 1)
    },
  },
]
</script>

<template>
  <UTable v-if="champions" :data="champions" :columns sticky> </UTable>
</template>
