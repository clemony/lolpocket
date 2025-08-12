<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { class: className, size, item, text, full } = defineProps<{
  class?: HTMLAttributes['class']
  item: RouteRecordRaw
  size: 'lg' | 'icon'
  text?: boolean
  full?: boolean
}>()
</script>

<template>
  <SidebarMenuButton
    :size="size"
    :class="cn('', className)">
    <hicon
      v-if="item.meta?.icon && (!text || full)"
      :name="String(item.meta?.icon)"
      :class="cn('p-0', { '**:!stroke-[2.1] !size-4.5': item.name == 'live', '!text-bc/60': item.name == 'mastery' })" />
    <span class="capitalize">{{ item.meta.title ?? item.name }}</span>
  </SidebarMenuButton>
</template>