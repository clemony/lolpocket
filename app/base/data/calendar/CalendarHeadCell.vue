<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarHeadCell, useForwardProps } from 'reka-ui'

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    :class="cn('w-9 rounded-md text-[0.8rem] font-normal text-bc/50', props.class)"
    v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
