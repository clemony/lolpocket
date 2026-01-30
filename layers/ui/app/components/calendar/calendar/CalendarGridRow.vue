<script lang="ts" setup>
import type { CalendarGridRowProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { CalendarGridRow, useForwardProps } from 'reka-ui'

const props = defineProps<
  CalendarGridRowProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow v-bind="forwardedProps" :class="cn('flex', props.class)">
    <slot />
  </CalendarGridRow>
</template>
