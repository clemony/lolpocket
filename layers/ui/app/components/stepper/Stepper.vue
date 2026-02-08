<script lang="ts" setup>
import type { StepperRootEmits, StepperRootProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { StepperRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  StepperRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<StepperRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <StepperRoot
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('flex gap-2', props.class)">
    <slot v-bind="slotProps" />
  </StepperRoot>
</template>
