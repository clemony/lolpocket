<script lang="ts" setup>
const props = defineProps<{
  folder: SortableFolder
  view: string
}>()
definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

const items = computed(() => props.folder?.subfolders)
</script>

<template>
  <div>
    <NuxtLayout name="folder">
      <BackpackGrid :folder />
      <template v-if="folder?.subfolders?.value.length">
        <BackpackGrid
          v-for="(item, i) in folder.subfolders.value"
          :key="item.id"
          :folder="item"
          :index="i" />
      </template>
    </NuxtLayout>
  </div>
</template>
