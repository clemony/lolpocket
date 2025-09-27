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
        'relative flex flex-nowrap gap-3 cursor-default select-none items-center rounded-lg px-3 pr-1.5 py-1.5 text-2 outline-none focus:bg-b2 focus:textneutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </MenubarItem>
</template>
