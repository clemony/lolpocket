<script lang="ts" setup>
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
const { items } = defineProps<{
  items: ComputedRef<PocketButton[]>
}>()
definePageMeta({
  title: "Backpack",
  layout: "backpack-layout",
  icon: "lucide:folder",
  prefix: "Backpack",
  order: 1
})

const selected = ref<Pocket | null>(null)
</script>

<template>
  <BackpackColumns :items />
</template>
