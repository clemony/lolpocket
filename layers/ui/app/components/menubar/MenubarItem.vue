<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from 'reka-ui'
import { MenubarItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  MenubarItemProps & { class?: HTMLAttributes['class'], inset?: boolean }
>()

const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="
      cn(
        'focus:bg-b2 focus:text-bc relative flex cursor-default flex-nowrap items-center gap-3 rounded-lg py-1.5 pr-1.5 pl-2.5 text-sm font-medium delay-0! duration-0! outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </MenubarItem>
</template>
