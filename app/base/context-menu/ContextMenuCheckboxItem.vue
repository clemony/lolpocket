<script setup lang="ts">
import type { ContextMenuCheckboxItemEmits, ContextMenuCheckboxItemProps } from 'reka-ui'
import {
  ContextMenuCheckboxItem,

  ContextMenuItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuCheckboxItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-2 outline-none focus:bg-b2 focus:text-n1-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <icon
          name="tick-sm"
          class="h-4 w-4" />
      </ContextMenuItemIndicator>
    </span>

    <slot />
  </ContextMenuCheckboxItem>
</template>
