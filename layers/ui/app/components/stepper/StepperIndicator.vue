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
        'text-pc/50/50 inline-flex size-10 items-center justify-center rounded-full',
        // Disabled
        'group-data-disabled:opacity-50 group-data-[disabled]:text-pc/50',
        // Active
        'group-data-[state=active]:bg-neutral group-data-[state=active]:text-nc',
        // Completed
        `
          group-data-[state=completed]:bg-tint-p2/60
          group-data-[state=completed]:text-pc
        `,
        props.class,
      )
    ">
    <slot />
  </StepperIndicator>
</template>
