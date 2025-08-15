<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { item } = defineProps<{
  item: RouteRecordRaw
}>()
console.log('item: ', item)
</script>

<template>
  <NavigationMenuItem
    :key="item.name"
    v-tippy="{ content: item.name, placement: 'right', offset: [0, 12], arrow: false, theme: 'basic', contentClass: 'font-medium capitalize', delay: [0, 0] }">
    <NavMenuLink
      size="md"
      shape="circle">
      <hicon
        :name="String(item.meta?.icon)"
        class="size-5.5 absolute object-center place-self-center"
        :class="cn('', item.meta?.iconStyle ?? null)" />
    </NavMenuLink>
  </NavigationMenuItem>
</template>