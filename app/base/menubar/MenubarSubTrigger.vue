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
        'flex cursor-default select-none items-center  rounded-lg pl-2.5 pr-1.5 py-1.5 text-2 outline-none focus:bg-b2  font-medium gap-3 focus:text-bc data-[state=open]:bg-b2 data-[state=open]:textneutral-bc data-disabled:!bg-b2/60 data-disabled:opacity-60 data-disabled:pr-2.75 group',
        inset && 'pl-8.5',
        props.class,
      )
    ">
    <slot />

    <icon
      name="right"
      class="ml-auto size-4 group-data-disabled:hidden opacity-50" />
  </MenubarSubTrigger>
</template>
