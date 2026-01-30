<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from 'reka-ui'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ComboboxInputProps & {
    class?: HTMLAttributes['class']
    styled?: boolean
  }
>()

const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    :class="
      cn(
        {
          'border-b3/80 text-md file:text-md placeholder:text-bc/50 focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50':
            props.styled,
        },
        props.class,
      )
    "
  >
    <slot />
  </ComboboxInput>
</template>
