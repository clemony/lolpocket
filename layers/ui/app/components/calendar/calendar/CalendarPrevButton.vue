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
    v-bind="forwardedProps"
    :class="
      cn(
        `size-7 bg-transparent p-0 opacity-50 hover:opacity-100`,
        props.class,
      )
    "
  >
    <slot>
      <icon class="size-4" name="left" />
    </slot>
  </CalendarPrev>
</template>
