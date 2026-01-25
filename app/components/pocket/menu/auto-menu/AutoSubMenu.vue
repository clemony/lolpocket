<script setup lang="ts">
import type { MenubarItem, MenubarItemType } from '~/components/pocket/menu/types.menubar'

const { class: className, item } = defineProps<{
  item: MenubarItem
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- submenu -->
  <MenubarSub v-if="item">
    <MenubarSubTrigger
      :inset="item?.inset"
      :class="cn('group/trig', item?.class?.trigger)"
    >
      <icon
        v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
        :name="getIcon(item.icon)?.name"
        :class="cn('size-4.5', getIcon(item.icon)?.class)"
      />
      <span class="truncate">
        {{ item.name }}
      </span>

      <MenubarShortcut
        v-if="item.shortcut"
        class="absolute right-8 flex size-max items-center gap-2"
      >
        <component
          :is="item.shortcut?.component"
          v-if="item.shortcut?.component"
        />
        <Icon
          v-if="item.shortcut?.icon"
          :name="item.shortcut?.icon"
          :class="cn(item.shortcut?.class)"
        />
        <span
          v-if="item.shortcut?.text"
          class="
            badge max-w-40 truncate badge-neutral text-xs! badge-sm
            font-semibold! tracking-normal group-open/trig:badge-neutral
            group-hover/trig:badge-neutral
          "
        >
          {{ item.shortcut?.text }}
        </span>
      </MenubarShortcut>
    </MenubarSubTrigger>
    <LazyMenubarSubContent
      :class="cn('max-h-90 w-64 overflow-y-auto', item.class?.content)"
      :align-offset="-2"
    >
      <component
        :is="item.component"
        v-if="item.component"
      />
      <!-- subitem -->
      <AutoMenuContent
        v-for="(subitem, i) in item.items"
        v-else
        :key="i"
        :item="subitem as MenubarItemType"
      />
    </LazyMenubarSubContent>
  </MenubarSub>
</template>
