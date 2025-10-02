<script lang="ts" setup>
import type { RangeCalendarNextProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarNext, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/ts/variant-index'

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline', shape: 'square' }),
      'size-8 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps">
    <slot>
      <icon
        name="right"
        class="h-4 w-4" />
    </slot>
  </RangeCalendarNext>
</template>
