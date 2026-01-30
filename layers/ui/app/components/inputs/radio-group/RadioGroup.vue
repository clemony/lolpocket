<script setup lang="ts">
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import { LayoutGroup } from 'motion-v'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  RadioGroupRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <LayoutGroup>
    <RadioGroupRoot v-bind="forwarded" :class="cn('grid gap-2', props.class)">
      <slot />
    </RadioGroupRoot>
  </LayoutGroup>
</template>
