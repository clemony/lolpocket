<script lang="ts" setup>
import type { CalendarCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarCell, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCell
    :class="
      cn('text-md [&:has([data-selected])]:bg-b2 [&:has([data-selected][data-outside-view])]:bg-b2/50 relative size-9 p-0 text-center focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md',
         props.class,
      )
    "
    v-bind="forwardedProps">
    <slot />
  </CalendarCell>
</template>
