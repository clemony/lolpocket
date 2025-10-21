<script lang="ts" setup>
import type { RangeCalendarPrevProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { RangeCalendarPrev, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline', size: 'sq-md' }),
      'size-8 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps">
    <slot>
      <icon
        name="left"
        class="h-4 w-4" />
    </slot>
  </RangeCalendarPrev>
</template>
