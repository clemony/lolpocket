<script lang="ts" setup>
import type { StepperSeparatorProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { StepperSeparator, useForwardProps } from 'reka-ui'

const props = defineProps<
  StepperSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="
      cn(
        'bg-b2',
        // Disabled
        'group-data-[disabled]:bg-b2 group-data-[disabled]:opacity-50',
        // Completed
        'group-data-[state=completed]:bg-bc',
        props.class,
      )
    " />
</template>
