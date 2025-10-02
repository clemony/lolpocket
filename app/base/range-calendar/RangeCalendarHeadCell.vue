<script lang="ts" setup>
import type { RangeCalendarHeadCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarHeadCell, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeadCell
    :class="cn('w-9 rounded-md text-[0.8rem] font-normal text-bc/50', props.class)"
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeadCell>
</template>
