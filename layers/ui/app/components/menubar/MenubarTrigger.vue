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
  <!-- focus:bg-p2  -->
  <MenubarTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex cursor-default items-center rounded-md px-3.5 py-1 text-sm font-medium outline-none select-none focus:text-pc data-[state=open]:bg-p2 data-[state=open]:text-pc',
        props.class,
      )
    ">
    <slot />
  </MenubarTrigger>
</template>
