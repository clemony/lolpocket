<script setup lang="ts">
import type { MenubarItem } from '~/components/pocket/menu/types.menubar'

const { item } = defineProps<{ item: MenubarItem }>()
const modelProxy = computed({
  get: () => item.model.valueOf(),
  set: v => item.model.set(v),
})
</script>

<template>
  <!-- checkbox -->
  <MenubarCheckboxItem
    as="label"
    :checkbox-type="item.checkboxType"
    :inset="item.inset">
    <icon
      v-if="typeof item.icon !== 'string' && getIcon(item.icon)?.name"
      :name="getIcon(item.icon)?.name"
      :class="cn('size-4.5', getIcon(item.icon)?.class)" />
    {{ item.name }}
  </MenubarCheckboxItem>
</template>
