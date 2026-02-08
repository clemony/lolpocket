<script setup lang="ts">
import type { MenubarSubTriggerProps } from 'reka-ui'
import { MenubarSubTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  MenubarSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwarded"
    :class="
      cn(
        'group flex cursor-default items-center gap-3 rounded-lg py-1.5 pr-2 pl-2.5 text-sm font-medium outline-none select-none focus:bg-p2 focus:text-pc data-disabled:bg-p2/60! data-disabled:pr-2.75 data-disabled:opacity-60 data-[state=open]:bg-p2 data-[state=open]:text-pc',
        inset && 'pl-10 in-[.menu-group]:pl-8.5',
        props.class,
      )
    ">
    <slot />

    <icon
      class="ml-auto size-4 opacity-50 group-data-disabled:hidden"
      name="right" />
  </MenubarSubTrigger>
</template>
