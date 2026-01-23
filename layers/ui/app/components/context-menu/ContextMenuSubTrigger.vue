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
      cn('focus:textneutral-bc data-[state=open]:textneutral-bc focus:bg-b2 data-[state=open]:bg-b2 flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none',
         inset && 'pl-8',
         props.class,
      )
    ">
    <slot />

    <icon
      name="right"
      class="ml-auto size-4" />
  </ContextMenuSubTrigger>
</template>
