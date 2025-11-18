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
      cn('group flex cursor-default items-center gap-3 rounded-lg py-1.5 pr-2 pl-2.5 text-2 font-medium outline-none select-none focus:bg-b2 focus:text-bc data-disabled:bg-b2/60! data-disabled:pr-2.75 data-disabled:opacity-60 data-[state=open]:bg-b2 data-[state=open]:text-bc',
        inset && 'in-[.menu-group]:pl-8.5 pl-10',
        props.class,
      )
    ">
    <slot />

    <icon
      name="right"
      class="ml-auto size-4 opacity-50 group-data-disabled:hidden" />
  </MenubarSubTrigger>
</template>
