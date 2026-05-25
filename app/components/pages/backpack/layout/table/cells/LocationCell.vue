<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"
import { folderActions } from "~/components/pages/backpack/layout/table/tableMenus"
import { useFolders } from "~/domain/pocket/folder/useFolder"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()

const { routeFolder, subfolders } = useFolders()

const { folderIcon } = user()
</script>

<template>
  <div
    class="absolute inset-2 z-5 grid size-full -translate-2 place-items-center">
    <UDropdownMenu
      v-slot="{ open }"
      :ui="{ content: 'w-60', itemLeadingIcon: 'icon-bold **:stroke-[11%]!' }"
      :content="{
        align: 'start',
        sideOffset: 2,
        alignOffset: -2
      }"
      :items="folderActions(routeFolder, row, subfolders)"
      size="md">
      <UButton
        variant="ghost"
        color="neutral"
        icon="i-more"
        :ui="{
          base: 'absolute z-5 not-hover:bg-p0 hover:[&_svg]:text-nc',
          leadingIcon: 'scale-120 group-data-[state=open]/btn:text-nc'
        }" />
    </UDropdownMenu>
  </div>
</template>
