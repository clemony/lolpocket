<script lang="ts" setup>
import type { RangeCalendarNextProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarNext, useForwardProps } from 'reka-ui'

const props = defineProps<
  RangeCalendarNextProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarNext
    v-bind="forwardedProps"
    :class="
      cn(
        buttonVariants({ variant: 'outline', size: 'sq-10' }),
        `size-8 bg-transparent p-0 opacity-50 hover:opacity-100`,
        props.class,
      )
    "
  >
    <slot>
      <icon class="size-4" name="right" />
    </slot>
  </RangeCalendarNext>
</template>
