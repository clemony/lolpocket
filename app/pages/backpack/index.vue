<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
definePageMeta({
  title: "Backpack",
  icon: "i-folder",
  iconKey: "folder",
  prefix: "Backpack",
  order: 2,
  path: "/backpack"
})

const { folders, pockets } = useFolders()

const { viewMode } = useBackpack()
</script>

<template>
  <UPage
    class="size-full max-h-[calc(100vh-var(--ui-header-height)*2)] overflow-y-auto">
    <UPageBody class="mx-auto size-full max-w-(--ui-container-lg) px-10 py-4">
      <BackpackGrid :folder="pockets" />
      <template v-if="viewMode === 'gallery'">
        <template v-for="folder in folders" :key="folder.id">
          <BackpackGrid v-if="folder.children" header :folder="folder" />
        </template>
      </template>
      <template v-else>
        <BackpackTable :item="pockets" />
      </template>
    </UPageBody>
  </UPage>
</template>
