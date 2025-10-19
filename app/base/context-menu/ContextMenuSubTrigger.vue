<script setup lang="ts">
import type { ContextMenuSubTriggerProps } from 'reka-ui'
import { ContextMenuSubTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  ContextMenuSubTriggerProps & {
    class?: HTMLAttributes['class']
    inset?: boolean
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-2 outline-none focus:bg-b2 focus:textneutral-bc data-[state=open]:bg-b2 data-[state=open]:textneutral-bc',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />

    <icon
      name="right"
      class="ml-auto h-4 w-4" />
  </ContextMenuSubTrigger>
</template>
