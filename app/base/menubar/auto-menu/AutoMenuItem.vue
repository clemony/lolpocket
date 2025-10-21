<script setup lang="ts">
import type { MenubarItemType } from '../menubar.types'

const { item } = defineProps<{
  item: MenubarItemType
}>()
</script>

<template>
  <!-- item -->
  <MenubarItem
    :key="item.name.toString()"
    :inset="item.inset"
    class="group/item truncate"
    @click="item.key ? navigateTo(`/pocket/${item.key}`) : null">
    <PocketIcon
      v-if="item?.key && typeof item.icon === 'string'"
      size="sm"
      :img="String(item?.icon)"
      class="size-7 rounded-full" />
    <hicon
      v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
      :name="getIcon(item.icon)?.name"
      :class="cn('size-4.5', getIcon(item.icon)?.class)" />
    <span class="truncate">
      {{ item.name }}
    </span>

    <MenubarShortcut
      v-if="item.shortcut"
      class="flex gap-2 pr-1 text-1">
      <hicon
        v-if="item.shortcut?.icon"
        :name="item.shortcut?.icon"
        :class="cn(item.shortcut?.class)" />
      <template v-if="item.shortcut?.text">
        {{ item.shortcut?.text }}
      </template>
    </MenubarShortcut>
  </MenubarItem>
</template>