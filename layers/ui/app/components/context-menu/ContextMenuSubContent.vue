<script setup lang="ts">
import type {
  DropdownMenuSubContentEmits,
  DropdownMenuSubContentProps,
} from 'reka-ui'
import { ContextMenuSubContent, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  DropdownMenuSubContentProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<DropdownMenuSubContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuSubContent
    v-bind="forwarded"
    :class="
      cn(
        'text-popover-bc data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-b2 bg-b1 data-[state=open]:animate-in data-[state=closed]:animate-out z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg',
        props.class,
      )
    "
  >
    <slot />
  </ContextMenuSubContent>
</template>
