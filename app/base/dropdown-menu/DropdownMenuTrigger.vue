<script setup lang="ts">
import type { DropdownMenuTriggerProps } from 'reka-ui'
import { DropdownMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuTriggerProps & {
  class?: HTMLAttributes['class']
  size?: any
  variant?: any
  shape?: any
}>()

const forwarded = useForwardProps(props)
</script>

<template>
  <Button
    :variant="variant"
    :size="size"
    as-child
    :shape="shape"
    :class="cn('', props.class)">
    <DropdownMenuTrigger
      class="outline-none cursor-pointer"
      v-bind="forwarded">
      <slot />
    </DropdownMenuTrigger>
  </Button>
</template>
