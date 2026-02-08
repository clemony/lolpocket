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
        'btn-depth rounded-lg text-nc **:text-nc focus:border-p3/10 focus:bg-tint-p2/60 focus:text-nc data-[state=highlighted]:bg-tint-p2/60',
        props.class,
      )
    ">
    <slot />
  </SelectItem>
</template>
