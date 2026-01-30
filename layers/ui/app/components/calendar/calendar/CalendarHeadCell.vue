<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarHeadCell, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarHeadCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    v-bind="forwardedProps"
    :class="
      cn('text-bc/50 w-9 rounded-md text-[0.8rem] font-normal', props.class)
    "
  >
    <slot />
  </CalendarHeadCell>
</template>
