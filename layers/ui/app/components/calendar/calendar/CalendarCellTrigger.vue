<script lang="ts" setup>
import type { CalendarCellTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarCellTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'size-9 p-0 font-normal',
        `
          [&[data-today]:not([data-selected])]:bg-p2
          [&[data-today]:not([data-selected])]:text-pc
        `,
        // Selected
        `
          data-selected:bg-neutral data-selected:text-pc
          data-selected:opacity-100 data-selected:hover:bg-neutral
          data-selected:hover:text-pc data-selected:focus:bg-neutral
          data-selected:focus:text-pc
        `,
        // Disabled
        'data-disabled:text-pc/50 data-disabled:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-bc data-unavailable:line-through',
        // Outside months
        `
          data-outside-view:text-pc/50 data-outside-view:opacity-50
          [&[data-outside-view][data-selected]]:bg-p2/50
          [&[data-outside-view][data-selected]]:text-pc/50
          [&[data-outside-view][data-selected]]:opacity-30
        `,
        props.class,
      )
    ">
    <slot />
  </CalendarCellTrigger>
</template>
