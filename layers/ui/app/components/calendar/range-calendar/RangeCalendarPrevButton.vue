<script lang="ts" setup>
import type { RangeCalendarPrevProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarPrev, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarPrevProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    v-bind="forwardedProps"
    :class="
      cn(
        `size-8 bg-transparent p-0 opacity-50 hover:opacity-100`,
        props.class,
      )
    ">
    <slot>
      <icon
        class="size-4"
        name="left" />
    </slot>
  </RangeCalendarPrev>
</template>
