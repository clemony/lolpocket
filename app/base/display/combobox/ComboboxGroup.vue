<script setup lang="ts">
import type { ComboboxGroupProps } from 'reka-ui'
import { ComboboxGroup, ComboboxLabel } from 'reka-ui'

const props = defineProps<ComboboxGroupProps & {
  class?: HTMLAttributes['class']
  heading?: string
  icon?: string
}>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxGroup
    v-bind="delegatedProps"
    :class="cn('overflow-hidden p-1 text-bc [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-bc/50', props.class)">
    <ComboboxLabel
      v-if="heading"
      class="px-2 capitalize py-1.5 text-2 font-medium text-bc/50 flex items-center gap-2">
      <slot name="icon" />{{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
