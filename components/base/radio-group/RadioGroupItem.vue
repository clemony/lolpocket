<script setup lang="ts">

import {
  RadioGroupIndicator,
  RadioGroupItem,

  useForwardProps,
} from 'reka-ui'
import type { RadioGroupItemProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full border border-b2  border border-b2 -neutral text-neutral shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-b2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <CheckIcon class="h-3.5 w-3.5 text-neutral" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
