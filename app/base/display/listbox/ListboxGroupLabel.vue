<script setup lang="ts">
import type { ListboxGroupLabelProps } from 'reka-ui'
import { ListboxGroupLabel, useForwardProps } from 'reka-ui'

const props = defineProps<
  ListboxGroupLabelProps & {
    class?: HTMLAttributes['class']
  }
>()

const delegated = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegated)
</script>

<template>
  <ListboxGroupLabel
    v-bind="forwarded"
    :class="cn('px-3 py-1 text-2 font-semibold text-bc/50', props.class)">
    <slot />
  </ListboxGroupLabel>
</template>
