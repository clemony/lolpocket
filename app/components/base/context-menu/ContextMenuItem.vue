<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui'
import {
  ContextMenuItem,

  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default font-medium gap-2 select-none items-center rounded-sm px-2 py-1.5 text-2 outline-none focus:bg-b2 focus:text-neutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )">
    <slot />
  </ContextMenuItem>
</template>
