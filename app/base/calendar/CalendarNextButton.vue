<script lang="ts" setup>
import type { CalendarNextProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarNext, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps">
    <slot>
      <icon
        name="right"
        class="h-4 w-4" />
    </slot>
  </CalendarNext>
</template>
