<script setup lang="ts">
import type { MenubarTriggerProps } from 'reka-ui'
import { MenubarTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-2 font-medium outline-none focus:bg-b2 focus:text-neutral-bc data-[state=open]:bg-b2 data-[state=open]:text-neutral-bc',
        props.class,
      )
    ">
    <slot />
  </MenubarTrigger>
</template>
