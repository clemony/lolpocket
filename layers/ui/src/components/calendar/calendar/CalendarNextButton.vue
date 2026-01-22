<script lang="ts" setup>
import type { CalendarNextProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarNext, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarNextProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        `size-7 bg-transparent p-0 opacity-50 hover:opacity-100`,
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot>
      <icon
        name="right"
        class="size-4" />
    </slot>
  </CalendarNext>
</template>
