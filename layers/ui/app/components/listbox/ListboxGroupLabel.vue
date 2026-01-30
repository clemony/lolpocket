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
    :class="cn('text-bc/50 px-3 py-1 text-sm font-semibold', props.class)"
  >
    <slot />
  </ListboxGroupLabel>
</template>
