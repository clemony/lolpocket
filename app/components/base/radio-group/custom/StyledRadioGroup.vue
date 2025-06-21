<script lang="ts" setup>
import { useForwardPropsEmits } from 'reka-ui'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'

const props = defineProps<RadioGroupRootProps & {
  class?: HTMLAttributes['class']
  contrast?: boolean
}>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <div v-bind="forwarded" :class="cn('flex flex-col', props.class)">
    <slot />
  </div>
</template>