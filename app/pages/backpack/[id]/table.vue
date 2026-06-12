<script lang="ts" setup>
definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  iconKey: "folder",
  prefix: "Backpack",
  layout: false,
  type: "folder",
  order: 1
})
</script>

<template>
  <div class="w-full max-w-full overflow-x-hidden overflow-y-visible">
    <NuxtLayout name="folder-layout">
      <BackpackTable />
    </NuxtLayout>
  </div>
</template>
