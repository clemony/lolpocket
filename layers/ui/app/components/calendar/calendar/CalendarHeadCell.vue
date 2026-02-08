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
      cn('w-9 rounded-md text-[0.8rem] font-normal text-pc/50', props.class)
    ">
    <slot />
  </CalendarHeadCell>
</template>
