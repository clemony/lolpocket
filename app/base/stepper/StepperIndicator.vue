<script lang="ts" setup>
import type { StepperIndicatorProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { StepperIndicator, useForwardProps } from 'reka-ui'

const props = defineProps<
  StepperIndicatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    :class="
      cn(
        'inline-flex items-center justify-center rounded-full text-bc/50/50 w-10 h-10',
        // Disabled
        'group-data-[disabled]:text-bc/50 group-data-[disabled]:opacity-50',
        // Active
        'group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground',
        // Completed
        'group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground',
        props.class,
      )
    ">
    <slot />
  </StepperIndicator>
</template>
