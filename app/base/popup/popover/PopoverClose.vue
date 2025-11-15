<script setup lang="ts">
import type { PopoverCloseProps } from 'reka-ui'
import { PopoverClose, useForwardProps } from 'reka-ui'

const props = defineProps<
  PopoverCloseProps & {
    class?: HTMLAttributes['class']
  }
>()
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverClose v-bind="forwarded">
    <slot />
  </PopoverClose>
</template>
