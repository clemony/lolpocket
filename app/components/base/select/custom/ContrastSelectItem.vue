<script lang="ts" setup>
import {
  SelectItemIndicator,
} from 'reka-ui'
import type { AcceptableValue } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
  value: AcceptableValue
}>()
</script>

<template>
  <SelectItem :value="props.value" :class="cn(' data-[state=highlighted]:bg-accent focus:bg-accent  text-nc focus:border-b3/10 rounded-lg focus:text-nc btn-depth **:text-nc', props.class)">
    <slot />
  </SelectItem>
</template>