<script lang="ts" setup>
import type { CalendarHeadingProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarHeading, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarHeadingProps & { class?: HTMLAttributes['class'] }
>()

defineSlots<{
  default: (props: { headingValue: string }) => any
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    v-bind="forwardedProps"
    :class="cn('text-md font-medium', props.class)"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
