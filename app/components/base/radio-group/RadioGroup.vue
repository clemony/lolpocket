<script setup lang="ts">
import { LayoutGroup } from 'motion-v'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <LayoutGroup>
    <RadioGroupRoot
      :class="cn('grid gap-2', props.class)"
      v-bind="forwarded">
      <slot />
    </RadioGroupRoot>
  </LayoutGroup>
</template>
