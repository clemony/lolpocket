<script setup lang="ts">
import { MenubarGroup } from 'reka-ui'
import type { MenubarGroupProps } from 'reka-ui'

const props = defineProps<MenubarGroupProps>()
</script>

<template>
  <MenubarGroup
    v-bind="props"
    class="px-2 ">
    <slot />
  </MenubarGroup>
</template>
