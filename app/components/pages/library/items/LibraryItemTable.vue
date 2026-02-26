<script lang="ts" setup>
import { Tooltip, UUser } from "#components"
import type { TableColumn } from "@nuxt/ui"
import { statIndex } from "~~/shared/constants/common/stat-index"

const { filtered } = storeToRefs(is())

const {
  data: itemsLite,
  status,
  execute,
} = useFetch<Record<number, ItemLite>>(() => `/cdn/items-lite.json`, {
  server: false,
  lazy: true,
  immediate: false,
  key: () => `items-lite`,
})

const data = computed<ItemLite[]>(() =>
  filtered.value
    .map((v: number) => itemsLite.value?.[v])
    .filter((item): item is ItemLite => Boolean(item))
)

const statValue = (row: ItemLite, key: keyof NonNullable<ItemLite["stats"]>) =>
  row.stats?.[key] ?? null

const columns: TableColumn<ItemLite>[] = [
  {
    accessorKey: "id",
    enablePinning: true,
    header: "Item",
    cell: ({ row }) => {
      return h("div", { class: "flex items-center gap-3" }, [
        h(UUser, {
          avatar: {
            src: `/img/items/${row.original.id}.webp`,
            icon: "i-lol-regen",
            ui: {
              icon: "size-4.5",
            },
          },
          name: row.original.name,
          size: "lg",
        }),
      ])
    },
  },
  ...Object.values(statIndex)
    .filter((v) => v.group !== "champion")
    .map((v) => ({
      id: v.id,
      accessorFn: (row: ItemLite) => statValue(row, v.id),
      header: v.key, //h(Tooltip, { icon: `i-stat-${v.id}`, text: v.name }),
    })),

  /*  {
    id: "magicPen",
    header: "Magic Pen",
    accessorFn: (row) => {
      const stats = row.stats ?? {}
      if (stats.percentMagicPenetration != null)
        return `${stats.percentMagicPenetration}%`
      if (stats.flatMagicPenetration != null)
        return `${stats.flatMagicPenetration}`
      return ""
    },
  },

  {
    id: "movespeed",
    header: "Movespeed",
    accessorFn: (row) => {
      const stats = row.stats ?? {}
      if (stats.percentMovespeed != null) return `${stats.percentMovespeed}%`
      if (stats.flatMovespeed != null) return `${stats.flatMovespeed}`
      return ""
    },
  },
  {
    accessorKey: "cost",
    header: "Shop Price",
  },*/
  {
    accessorKey: "id",
    header: "ID",
  },
]

onMounted(() => {
  execute()
})
</script>

<template>
  <UButton>TESST</UButton><UButton>TESST</UButton><br />
  <UTable :virtualize="{ estimateSize: 51 }" :columns :data sticky> </UTable>
  <UButton>TESST</UButton><UButton>TESST</UButton><br />
</template>
