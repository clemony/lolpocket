<script lang="ts" setup>
import type { RangeCalendarGridRowProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarGridRow, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarGridRowProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarGridRow
    v-bind="forwardedProps"
    :class="cn('mt-2 flex w-full', props.class)">
    <slot />
  </RangeCalendarGridRow>
</template>
