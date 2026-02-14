<script lang="ts" setup>
import { Tooltip, UUser } from "#components"
import { itemLite } from "#layers/patch/shared/records/itemLite"
import type { TableColumn } from "@nuxt/ui"

definePageMeta({
  name: "Item Stats",
  icon: "bi:list-ul",
})

const { filtered } = storeToRefs(is())

const data = computed<ItemLite[]>(() =>
  filtered.value
    .map((v: number) => itemLite[v])
    .filter((item): item is ItemLite => Boolean(item))
)

const statValue = (row: ItemLite, key: keyof NonNullable<ItemLite["stats"]>) =>
  row.stats?.[key] ?? null

const columns: TableColumn<ItemLite>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "id",
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
]
</script>

<template>
  <UTable :columns :data sticky>
  </UTable>
</template>
