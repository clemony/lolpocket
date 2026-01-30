<script lang="ts" setup>
import type { RangeCalendarHeadCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarHeadCell, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarHeadCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeadCell
    v-bind="forwardedProps"
    :class="
      cn('text-bc/50 w-9 rounded-md text-[0.8rem] font-normal', props.class)
    "
  >
    <slot />
  </RangeCalendarHeadCell>
</template>
