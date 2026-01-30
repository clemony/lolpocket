<script lang="ts" setup>
import type { RangeCalendarGridProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarGrid, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarGridProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarGrid
    v-bind="forwardedProps"
    :class="cn('w-full border-collapse space-y-1', props.class)"
  >
    <slot />
  </RangeCalendarGrid>
</template>
