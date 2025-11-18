<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui'
import { ContextMenuItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ContextMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }
>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="
      cn('relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-2 font-medium outline-none select-none focus:border-b3 focus:bg-b3/80 focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </ContextMenuItem>
</template>
