<script setup lang="ts">
import { ContextMenuPortal } from 'radix-vue'
import type { ContextMenuPortalProps } from 'radix-vue'

const props = defineProps<ContextMenuPortalProps>()
</script>

<template>
  <ContextMenuPortal v-bind="props">
    <slot />
  </ContextMenuPortal>
</template>
