<script setup lang="ts">
import { CollapsibleContent } from 'reka-ui'
import type { CollapsibleContentProps } from 'reka-ui'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
    <slot />
  </CollapsibleContent>
</template>
