<script lang="ts" setup>
import type { StepperTitleProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { StepperTitle, useForwardProps } from 'reka-ui'

const props = defineProps<
  StepperTitleProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTitle
    v-bind="forwarded"
    :class="cn('text-4 font-semibold whitespace-nowrap', props.class)">
    <slot />
  </StepperTitle>
</template>
