<script setup lang="ts">
import type { NumberFieldRootEmits, NumberFieldRootProps } from 'reka-ui'
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NumberFieldRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<NumberFieldRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NumberFieldRoot
    v-bind="forwarded"
    :class="cn('grid gap-1.5', props.class)">
    <slot />
  </NumberFieldRoot>
</template>
