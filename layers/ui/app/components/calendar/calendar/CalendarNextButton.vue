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
    v-bind="forwardedProps"
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        `size-7 bg-transparent p-0 opacity-50 hover:opacity-100`,
        props.class,
      )
    "
  >
    <slot>
      <icon class="size-4" name="right" />
    </slot>
  </CalendarNext>
</template>
