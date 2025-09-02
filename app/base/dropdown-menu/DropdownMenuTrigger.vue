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
    v-bind="forwarded"
    as-child>
    <Button
      :variant="variant"
      as="button"
      :size="size"
      :shape="shape"
      :class="cn('outline-none  data-[state=open]:btn-active cursor-pointer', props.class)">
      <slot />
    </Button>
  </DropdownMenuTrigger>
</template>
