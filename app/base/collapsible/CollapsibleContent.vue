<script setup lang="ts">
import type { CollapsibleContentProps } from 'reka-ui'
import { CollapsibleContent } from 'reka-ui'

const props = defineProps<CollapsibleContentProps & {
  class?: HTMLAttributes['class']
  menu?: boolean
}>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="cn('overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down CollapsibleContent *:not-after:z-1', { ' px-6 relative after:w-px after:z-0 after:h-[calc(100%-12px)]  after:absolute after:left-4  py-px after:top-[6px] after:bg-b3/60': props.menu })">
    <slot />
  </CollapsibleContent>
</template>
