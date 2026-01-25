<script setup lang="ts">
import type { MenubarItem } from '~/components/pocket/menu/types.menubar'

const { item } = defineProps<{
  item: MenubarItem
}>()
</script>

<template>
  <!-- group -->
  <MenubarGroup>
    <MenubarLabel>{{ item.name }}</MenubarLabel>
    <AutoMenuContent
      v-for="(subitem, i) in item.items"
      :key="i"
      :item="subitem"
    />
  </MenubarGroup>
</template>
