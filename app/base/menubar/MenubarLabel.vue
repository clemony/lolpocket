<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { MenubarLabel } from 'reka-ui'
import type { MenubarLabelProps } from 'reka-ui'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('px-2 py-1.5 dst text-2 font-semibold opacity-90', inset && 'pl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>
