<script setup lang="ts">
import type {
  ContextMenuCheckboxItemEmits,
  ContextMenuCheckboxItemProps,
} from 'reka-ui'
import {
  ContextMenuCheckboxItem,
  ContextMenuItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuCheckboxItem
    v-bind="forwarded"
    :class="
      cn('focus:textneutral-bc focus:bg-b2 relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50',
         props.class,
      )
    ">
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <input
          type="checkbox"
          class="checkbox checkbox-sm checkbox-neutral" />
      </ContextMenuItemIndicator>
    </span>

    <slot />
  </ContextMenuCheckboxItem>
</template>
