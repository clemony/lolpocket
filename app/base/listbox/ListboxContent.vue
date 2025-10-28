<script setup lang="ts">
import type { ListboxContentProps } from 'reka-ui'
import { ListboxContent, useForwardProps } from 'reka-ui'

const props = defineProps<ListboxContentProps & {
  class?: HTMLAttributes['class']
}>()

const delegated = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegated)
</script>

<template>
  <ListboxContent
    v-bind="forwarded"
<<<<<<< HEAD
    :autofocus="false"
=======
>>>>>>> refs/remotes/origin/main
    :class="cn('py-1  gap-1 ', props.class)">
    <slot />
  </ListboxContent>
</template>