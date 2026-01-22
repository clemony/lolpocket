<script lang="ts" setup>
import type { CalendarPrevProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarPrev, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarPrevProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
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
        name="left"
        class="size-4" />
    </slot>
  </CalendarPrev>
</template>
