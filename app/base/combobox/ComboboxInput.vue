<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from 'reka-ui'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
  styled?: boolean
}>()

const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    :class="cn({ 'flex h-9 w-full rounded-md border border-b3/80 bg-transparent px-3 py-1 text-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-3 file:font-medium placeholder:text-bc/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50': props.styled }, props.class)">
    <slot />
  </ComboboxInput>
</template>
