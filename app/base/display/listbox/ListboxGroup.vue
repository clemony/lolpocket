<script setup lang="ts">
import type { ListboxGroupProps } from 'reka-ui'
import { ListboxGroup, useForwardProps } from 'reka-ui'

const props = defineProps<ListboxGroupProps & {
  class?: HTMLAttributes['class']
}>()

const delegated = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegated)
</script>

<template>
  <ListboxGroup
    v-bind="forwarded"
    :class="cn('', props.class)">
    <slot />
  </ListboxGroup>
</template>