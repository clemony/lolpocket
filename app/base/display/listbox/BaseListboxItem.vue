<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'
import { ListboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ListboxItemProps & {
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<ListboxItemEmits>()

const delegated = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegated, emit)
</script>

<template>
  <ListboxItem
    v-bind="forwarded"
    :class="cn('', props.class)">
    <slot />
  </ListboxItem>
</template>