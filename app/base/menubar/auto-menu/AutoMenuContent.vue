<script setup lang="ts">
import type { MenubarItem } from '../menubar.types'

const { item } = defineProps<{ item: MenubarItem }>()
</script>

<template>
  <!-- separator -->
  <MenubarSeparator
    v-if="item.name === 'separator'"
    class="my-0.5  bg-b3/60" />

  <!-- checkbox -->
  <AutoMenuCheckboxItem
    v-else-if="item.type === 'checkbox'"
    :item />
  <!-- submenu -->
  <AutoSubMenu
    v-else-if="item.type === 'submenu'"
    :item />

  <!-- radio -->
  <AutoMenuRadioGroup
    v-else-if="item.type === 'radio'"
    :item />

  <!-- group -->
  <AutoMenuGroup
    v-else-if="item.type === 'group'"
    :item />

  <AutoMenuItem
    v-else
    :item />
</template>