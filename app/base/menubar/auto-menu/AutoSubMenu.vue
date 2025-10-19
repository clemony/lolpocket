<script setup lang="ts">
import type { MenubarItemType } from '../menubar.types'

const { item } = defineProps<{
  item: MenubarItemType
}>()
</script>

<template>
  <!-- submenu -->
  <MenubarSub>
    <MenubarSubTrigger :inset="item.inset">
      <icon
        v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
        :name="getIcon(item.icon)?.name"
        :class="cn('size-4.5', getIcon(item.icon)?.class)" />
      <span class="truncate">
        {{ item.name }}
      </span>
    </MenubarSubTrigger>
    <LazyMenubarSubContent
      class="w-64 max-h-100 overflow-y-auto"
      :align-offset="-2">
      <!-- subitem -->
      <AutoMenuItem
        v-for="subitem, i in item.items"
        :key="i"
        :item="subitem as MenubarItemType" />
    </LazyMenubarSubContent>
  </MenubarSub>
</template>