<script setup lang="ts">
import type { MenubarItemType } from '../menubar.types'

const { class: className, item } = defineProps<{
  item: MenubarItemType
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- submenu -->
  <MenubarSub v-if="item">
    <MenubarSubTrigger
      :inset="item?.inset"
      :class="cn('group/trig', item?.class?.trigger)">
      <icon
        v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
        :name="getIcon(item.icon)?.name"
        :class="cn('size-4.5', getIcon(item.icon)?.class)" />
      <span class="truncate">
        {{ item.name }}
      </span>

      <MenubarShortcut
        v-if="item.shortcut"
        class="flex items-center size-max absolute right-8  gap-2  ">
        <component
          :is="item.shortcut?.component"
          v-if="item.shortcut?.component" />
        <hicon
          v-if="item.shortcut?.icon"
          :name="item.shortcut?.icon"
          :class="cn(item.shortcut?.class)" />
        <span
          v-if="item.shortcut?.text"
          class="tracking-normal badge badge-sm badge-neutral !font-semibold group-hover/trig:badge-neutral group-open/trig:badge-neutral !text-1 max-w-40 truncate">
          {{ item.shortcut?.text }}
        </span>
      </MenubarShortcut>
    </MenubarSubTrigger>
    <LazyMenubarSubContent
      :class="cn('w-64 max-h-90 overflow-y-auto', item.class?.content)"
      :align-offset="-2">
      <component
        :is="item.component"
        v-if="item.component" />
      <!-- subitem -->
      <AutoMenuContent
        v-for="subitem, i in item.items"
        v-else
        :key="i"
        :item="subitem as MenubarItemType" />
    </LazyMenubarSubContent>
  </MenubarSub>
</template>