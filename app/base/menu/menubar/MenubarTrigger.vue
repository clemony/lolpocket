<script setup lang="ts">
import type { MenubarTriggerProps } from 'reka-ui'
import { MenubarTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <!-- focus:bg-b2  -->
  <MenubarTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-md px-3.5 py-1 text-2 font-medium outline-none focus:text-bc data-[state=open]:bg-b2 data-[state=open]:text-bc',
        props.class,
      )
    ">
    <slot />
  </MenubarTrigger>
</template>
