<script setup lang="ts">
import type {
  MenubarItem,
  MenubarRadioGroup,
} from '~/components/pocket/menu/types.menubar'

const { item } = defineProps<{ item: MenubarItem }>()
</script>

<template>
  <!-- separator -->
  <MenubarSeparator
    v-if="item.name === 'separator'"
    class="bg-b3/60 mt-0.75 mb-0.5"
  />

  <!-- checkbox -->
  <AutoMenuCheckboxItem v-else-if="item.type === 'checkbox'" :item />
  <!-- radio -->
  <AutoMenuRadioGroup
    v-else-if="item.type === 'radio'"
    :item="item as MenubarRadioGroup"
  />

  <!-- submenu -->
  <AutoSubMenu v-else-if="item.type === 'submenu'" :item />

  <!-- group -->
  <AutoMenuGroup v-else-if="item.type === 'group'" :item />

  <AutoMenuItem v-else :item />
</template>
