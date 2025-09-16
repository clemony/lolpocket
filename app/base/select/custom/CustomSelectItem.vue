<script lang="ts" setup>
import { SelectItemIndicator } from 'reka-ui'
import type { AcceptableValue } from 'reka-ui'

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
        ' data-[state=highlighted]:bg-accent rounded-lg  btn-depth ',
        props.class,
      )
    ">
    <slot />
  </SelectItem>
</template>
