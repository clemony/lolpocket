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
  <DropdownMenuTrigger
    v-bind="forwarded">
    <Button
      :variant="variant"
      :size="size"
      :shape="shape"
      :class="cn('', props.class)"
      class="outline-none cursor-pointer">
      <slot />
    </Button>
  </DropdownMenuTrigger>
</template>
