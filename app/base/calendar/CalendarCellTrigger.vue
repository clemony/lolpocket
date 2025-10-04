<script lang="ts" setup>
import type { CalendarCellTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarCellTrigger, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-9 w-9 p-0 font-normal',
      '[&[data-today]:not([data-selected])]:bg-b2 [&[data-today]:not([data-selected])]:text-bc',
      // Selected
      'data-[selected]:bg-neutral data-[selected]:text-bc data-[selected]:opacity-100 data-[selected]:hover:bg-neutral data-[selected]:hover:text-bc data-[selected]:focus:bg-neutral data-[selected]:focus:text-bc',
      // Disabled
      'data-[disabled]:text-bc/50 data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
      // Outside months
      'data-[outside-view]:text-bc/50 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-b2/50 [&[data-outside-view][data-selected]]:text-bc/50 [&[data-outside-view][data-selected]]:opacity-30',
      props.class,
    )"
    v-bind="forwardedProps">
    <slot />
  </CalendarCellTrigger>
</template>
