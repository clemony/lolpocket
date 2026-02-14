<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import type { RangeCalendarCellTriggerProps } from "reka-ui"
import { RangeCalendarCellTrigger, useForwardProps } from "reka-ui"

const props = defineProps<
  RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        `size-9 p-0 font-normal data-selected:opacity-100`,
        '',
        // Selection Start
        `
          data-selection-start:bg-neutral data-selection-start:text-nc
          data-selection-start:hover:bg-neutral
          data-selection-start:hover:text-nc
          data-selection-start:focus:bg-neutral
          data-selection-start:focus:text-nc
        `,
        // Selection End
        `
          data-selection-end:bg-neutral data-selection-end:text-nc
          data-selection-end:hover:bg-neutral
          data-selection-end:hover:text-nc
          data-selection-end:focus:bg-neutral
          data-selection-end:focus:text-nc
        `,
        // Outside months
        `
          data-outside-view:text-pc/50 data-outside-view:opacity-50
          [&[data-outside-view][data-selected]]:bg-p2/50
          [&[data-outside-view][data-selected]]:text-pc/50
          [&[data-outside-view][data-selected]]:opacity-30
        `,
        // Disabled
        `
          data-disabled:text-pc/50 data-disabled:opacity-50
          hover:data-disabled:bg-transparent
        `,
        // Unavailable
        'data-unavailable:text-dom data-unavailable:line-through',
        props.class
      )
    ">
    <slot />
  </RangeCalendarCellTrigger>
</template>
