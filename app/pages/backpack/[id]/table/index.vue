<script lang="ts" setup>
defineProps<{
  folder: Folder
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
</script>

<template>
  <div>
    <NuxtLayout name="folder">
      <BackpackTable :folder />
    </NuxtLayout>
  </div>
</template>
