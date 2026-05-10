<script lang="ts" setup>
import { UUser } from "#components"
import type { TableColumn } from "@nuxt/ui"
import type { Folder } from "#shared/schema"

const { item } = defineProps<{
  item: Folder
}>()

const data = computed<Pocket[] | undefined>(() =>
  item.children?.value.map((v) => v.pocket || ([] as unknown as Pocket))
)

const columns = ref<TableColumn<Pocket | undefined>[]>([
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.getValue("id")}`
  },
  {
    accessorKey: "label",
    header: "Pocket",
    cell: ({ row }) => {
      const arr = [
        row.getValue("_champion") ||
          (row.getValue("champions") as string[])[0] ||
          undefined,
        ` ${row.getValue("_role") || (row.getValue("roles") as string[])[0] || undefined} ${row.getValue("_position") || (row.getValue("positions") as string[])[0] || undefined}`
      ]

      return h(
        UUser,
        {
          name: String(row.getValue("label")),
          description: arr.join(", "),
          avatar: { src: getSplashFromSkinKey(row.getValue("skin"), "tile") },
          size: "lg"
        },
        () => row.getValue("label")
      )
    }
  },
  {
    accessorKey: "champions",
    header: "Champions"
  },
  {
    accessorKey: "runes",
    header: "Runes"
  },

  {
    accessorKey: "items",
    header: "Items"
  },

  {
    accessorKey: "spells",
    header: "Spells"
  },
  {
    accessorKey: "_map",
    header: "Map"
  },
  {
    accessorKey: "updated",
    header: "Updated"
  }
])
</script>

<template>
  <UTable :data :columns> </UTable>
</template>
