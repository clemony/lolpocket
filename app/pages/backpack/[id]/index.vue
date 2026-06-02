<script lang="ts" setup>
import { useFolders } from "~/domain/backpack/composables/useFolder"

definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

const { routeFolder } = useFolders()
</script>

<template>
  <div class="w-full">
    <NuxtLayout name="folder-layout">
      <BackpackGrid :folder="routeFolder" />
      <template v-if="routeFolder?.subfolders?.value.length">
        <BackpackGrid
          v-for="(item, i) in routeFolder.subfolders.value"
          :key="item.id"
          :folder="item" />
      </template>
    </NuxtLayout>
  </div>
</template>
