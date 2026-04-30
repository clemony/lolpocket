<script lang="ts" setup>
import type { TreeItemExt } from "~/domain/pocket/ui/treeItems"
const { items } = defineProps<{
  items: ComputedRef<TreeItemExt[]>
}>()
definePageMeta({
  title: "Pockets",
  icon: "lucide:folder",
  prefix: "Backpack",
  order: 1,
  path: "/backpack/pockets"
})

const selected = ref<Pocket | null>(null)
</script>

<template>
  <BackpackColumns :items />
</template>
