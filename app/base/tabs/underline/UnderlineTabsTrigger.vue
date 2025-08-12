<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger } from 'reka-ui'

const props = defineProps<
  TabsTriggerProps & {
    class?: HTMLAttributes['class']
  }
    >()
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :class="cn('inline-flex items-center justify-center whitespace-nowrap **:text-bc/50 text-bc/50 rounded-sm px-3 py-1.5 text-3 font-medium cursor-pointer hover:**:text-bc hover:text-bc ring-b3 transition-all  gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n1 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent data-[state=active]:!text-bc data-[state=active]:**:text-bc data-[state=active]:shadow-none', props.class)">
    <slot />
  </TabsTrigger>
</template>
