<script lang="ts" setup>
import { useFolders } from "~/domain/backpack/composables/useFolder"

const props = defineProps<{
  folder: SortableFolder
  view: string
}>()
definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  props: true,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

const { routeFolder } = useFolders()
</script>

<template>
  <div>
    <NuxtLayout name="folder">
      <BackpackGrid :folder="routeFolder" />
      <template v-if="folder?.subfolders?.value.length">
        <BackpackGrid
          v-for="(item, i) in folder.subfolders.value"
          :key="item.id"
          :folder="item" />
      </template>
    </NuxtLayout>
  </div>
</template>
