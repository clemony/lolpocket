<script lang="ts" setup>
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
        'btn-depth focus:bg-tint-p2/60 data-[state=highlighted]:bg-tint-p2/60 rounded-lg text-nc **:text-nc focus:border-p3/10 focus:text-nc',
        props.class,
      )
    ">
    <slot />
  </SelectItem>
</template>
