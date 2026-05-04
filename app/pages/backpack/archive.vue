<script setup lang="ts">
const { backpackViewMode } = defineProps<{
  backpackViewMode: "gallery" | "list"
}>()

definePageMeta({
  title: "Archive",
  icon: "lucide:archive",
  prefix: "Backpack",
  order: 2,
  path: "/backpack/archive"
})
</script>

<template>
  <PagePlaceholder />
</template>
