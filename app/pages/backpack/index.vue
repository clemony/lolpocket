<script lang="ts" setup>
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
const { items, backpackViewMode } = defineProps<{
  items: ComputedRef<PocketButton[]>

  backpackViewMode: "gallery" | "list"
}>()
definePageMeta({
  title: "Backpack",
  icon: "lucide:folder",
  prefix: "Backpack",
  order: 1
})

const selected = ref<Pocket | null>(null)
</script>

<template>
  <BackpackColumns :items />
</template>
