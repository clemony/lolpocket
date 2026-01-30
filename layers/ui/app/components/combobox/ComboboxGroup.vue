<script setup lang="ts">
import type { ComboboxGroupProps } from 'reka-ui'
import { ComboboxGroup, ComboboxLabel } from 'reka-ui'

const props = defineProps<
  ComboboxGroupProps & {
    class?: HTMLAttributes['class']
    heading?: string
    icon?: string
  }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxGroup
    v-bind="delegatedProps"
    :class="
      cn(
        'text-bc **:[[cmdk-group-heading]]:text-bc/50 overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-sm **:[[cmdk-group-heading]]:font-medium',
        props.class,
      )
    "
  >
    <ComboboxLabel
      v-if="heading"
      class="text-bc/50 flex items-center gap-2 px-2 py-1.5 text-sm font-medium capitalize"
    >
      <slot name="icon" />
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
