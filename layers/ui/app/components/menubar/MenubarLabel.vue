<script setup lang="ts">
import type { MenubarLabelProps } from 'reka-ui'
import { MenubarLabel } from 'reka-ui'

const props = defineProps<
  MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }
>()
</script>

<template>
  <MenubarLabel
    :class="
      cn(
        'text-bc/40 dst px-2 pt-1.5 text-sm font-semibold',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </MenubarLabel>
</template>
