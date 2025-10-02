<script lang="ts" setup>
import type { RangeCalendarHeadingProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarHeading, useForwardProps } from 'reka-ui'

const props = defineProps<RangeCalendarHeadingProps & { class?: HTMLAttributes['class'] }>()

defineSlots<{
  default: (props: { headingValue: string }) => any
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeading
    v-slot="{ headingValue }"
    :class="cn('text-3 font-medium', props.class)"
    v-bind="forwardedProps">
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>
