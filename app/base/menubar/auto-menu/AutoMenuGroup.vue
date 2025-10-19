<script setup lang="ts">
import type { MenubarItemType } from '../menubar.types'

const { item } = defineProps<{
  item: MenubarItemType
}>()
</script>

<template>
  <!-- group -->
  <MenubarGroup>
    <MenubarLabel>{{ item.name }}</MenubarLabel>
    <AutoMenuContent
      v-for="subitem, i in item.name"
      :key="i"
      :item="subitem" />
  </MenubarGroup>
</template>