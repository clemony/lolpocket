<script setup lang="ts">
import { ContextMenuGroup } from 'radix-vue'
import type { ContextMenuGroupProps } from 'radix-vue'

const props = defineProps<ContextMenuGroupProps>()
</script>

<template>
  <ContextMenuGroup v-bind="props">
    <slot />
  </ContextMenuGroup>
</template>
