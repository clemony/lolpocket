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
      cn(
        ' data-[state=highlighted]:bg-tint-b2/60 rounded-lg  btn-depth ',
        props.class,
      )
    ">
    <slot />
  </SelectItem>
</template>
