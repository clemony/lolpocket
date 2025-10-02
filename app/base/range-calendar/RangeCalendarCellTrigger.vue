<script lang="ts" setup>
import type { RangeCalendarCellTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarCellTrigger, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/ts/variant-index'

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-9 w-9 p-0 font-normal data-[selected]:opacity-100',
      '',
      // Selection Start
      'data-[selection-start]:bg-neutral data-[selection-start]:text-nc data-[selection-start]:hover:bg-neutral data-[selection-start]:hover:text-nc data-[selection-start]:focus:bg-neutral data-[selection-start]:focus:text-nc',
      // Selection End
      'data-[selection-end]:bg-neutral data-[selection-end]:text-nc data-[selection-end]:hover:bg-neutral data-[selection-end]:hover:text-nc data-[selection-end]:focus:bg-neutral data-[selection-end]:focus:text-nc',
      // Outside months
      'data-[outside-view]:text-bc/50 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-b2/50 [&[data-outside-view][data-selected]]:text-bc/50 [&[data-outside-view][data-selected]]:opacity-30',
      // Disabled
      'hover:data-[disabled]:bg-transparent data-[disabled]:text-bc/50 data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-domination data-[unavailable]:line-through',
      props.class,
    )"
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarCellTrigger>
</template>
