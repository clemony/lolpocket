<script lang="ts" setup>
import type { RangeCalendarCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarCell, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCell
    v-bind="forwardedProps"
    :class="
      cn(
        'text-md [&:has([data-selected])]:bg-b2 [&:has([data-selected][data-outside-view])]:bg-b2 relative size-9 p-0 text-center focus-within:relative focus-within:z-20 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',
        props.class,
      )
    "
  >
    <slot />
  </RangeCalendarCell>
</template>
