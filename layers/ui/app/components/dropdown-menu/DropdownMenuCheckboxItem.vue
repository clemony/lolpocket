<script setup lang="ts">
import type {
  DropdownMenuCheckboxItemEmits,
  DropdownMenuCheckboxItemProps,
} from 'reka-ui'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  DropdownMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class="
      cn('focus:textneutral-bc focus:bg-b2 relative flex cursor-default items-center rounded-sm py-1.5 pr-8 pl-10 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50',
         props.class,
      )
    ">
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <icon
          name="tick-sm"
          class="size-4" />
      </DropdownMenuItemIndicator>
    </span>

    <slot />
  </DropdownMenuCheckboxItem>
</template>
