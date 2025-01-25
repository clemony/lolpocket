<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

const props = defineProps<
  CollapsibleContentProps & {
    open?: boolean
  }
>()
//
// v-show="open"
const emit = defineEmits(['update:open'])
</script>

<template>
  <CollapsibleContent v-bind="props" class="overflow-hidden" as-child>
    <slot />
  </CollapsibleContent>
</template>
