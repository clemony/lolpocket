<script setup lang="ts">
import type { ListboxRootEmits, ListboxRootProps } from 'reka-ui'
import { ListboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ListboxRootProps & {
    class?: HTMLAttributes['class']
    as?: string
  }
>()
const emit = defineEmits<ListboxRootEmits>()

const delegated = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegated, emit)
</script>

<template>
  <ListboxRoot
    :as="props.as"
    :autofocus="false"
    v-bind="forwarded">
    <slot />
  </ListboxRoot>
</template>
