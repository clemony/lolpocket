<script setup lang="ts">
import type { ContextMenuTriggerProps } from 'reka-ui'
import { ContextMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuTriggerProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <ContextMenuTrigger v-bind="forwarded">
    <slot />
  </ContextMenuTrigger>
</template>
