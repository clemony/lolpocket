<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

defineProps<{
  folder: Folder
  view: string
}>()
</script>

<template>
  <BackpackTable :folder />
</template>

<style scoped>
/* .tab {
  --tab-corner-width: 6rem;
  --tab-corner-height: 3rem !important;
} */
</style>
