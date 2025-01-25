<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { MenubarLabel, type MenubarLabelProps } from 'radix-vue'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('text-2 px-2 py-1.5 font-semibold', inset && 'pl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>
