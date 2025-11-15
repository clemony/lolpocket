<script lang="ts" setup>
import type { StepperDescriptionProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { StepperDescription, useForwardProps } from 'reka-ui'

const props = defineProps<
  StepperDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperDescription
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('text-2 text-bc/50', props.class)">
    <slot v-bind="slotProps" />
  </StepperDescription>
</template>
