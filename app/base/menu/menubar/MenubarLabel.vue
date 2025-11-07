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
        'px-2 pt-1.5 dst text-2 font-semibold text-bc/40',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </MenubarLabel>
</template>
