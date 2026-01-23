<script lang="ts" setup>
import type { AcceptableValue } from 'reka-ui'
import { SelectItemIndicator } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
  value: AcceptableValue
}>()
</script>

<template>
  <SelectItem
    :value="props.value"
    :class="
      cn('btn-depth data-[state=highlighted]:bg-tint-b2/60 rounded-lg',
         props.class,
      )
    ">
    <slot />
  </SelectItem>
</template>
