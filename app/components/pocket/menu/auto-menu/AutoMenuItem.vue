<script setup lang="ts">
import type { MenubarItem } from '~/components/pocket/menu/types.menubar'

const { item } = defineProps<{
  item: MenubarItem
}>()
</script>

<template>
  <!-- item -->
  <MenubarItem
    :key="item.name.toString()"
    class="group/item truncate"
    :inset="item.inset"
    @click="item.key ? navigateTo(`/pocket/${item.key}`) : null">
    <PocketIcon
      v-if="item?.key && typeof item.icon === 'string'"
      class="size-7 rounded-full"
      size="sm"
      :src="String(item?.icon)" />
    <Icon
      v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
      :name="getIcon(item.icon)?.name"
      :class="cn('size-4.5', getIcon(item.icon)?.class)" />
    <span class="truncate">
      {{ item.name }}
    </span>

    <MenubarShortcut
      v-if="item.shortcut"
      class="flex gap-2 pr-1 text-xs">
      <Icon
        v-if="item.shortcut?.icon"
        :name="item.shortcut?.icon"
        :class="cn(item.shortcut?.class)" />
      <template v-if="item.shortcut?.text">
        {{ item.shortcut?.text }}
      </template>
    </MenubarShortcut>
  </MenubarItem>
</template>
