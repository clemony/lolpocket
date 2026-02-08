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
    v-bind="forwardedProps"
    :class="
      cn(
        'relative size-9 p-0 text-center text-md focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-p2 [&:has([data-selected][data-outside-view])]:bg-p2/50',
        props.class,
      )
    ">
    <slot />
  </CalendarCell>
</template>
