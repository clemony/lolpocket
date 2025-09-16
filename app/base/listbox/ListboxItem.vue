<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'
import { ListboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ListboxItemProps & {
    class?: HTMLAttributes['class']
  }
>()

const emits = defineEmits<ListboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ListboxItem
    v-bind="forwarded"
    :class="cn(' focus:outline-1 !outline-offset-0', props.class)">
    <slot />
  </ListboxItem>
</template>
