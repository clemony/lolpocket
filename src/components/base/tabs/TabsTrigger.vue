<script setup lang="ts">
import { cn } from '@lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
<TabsTrigger v-bind="forwardedProps" :class="cn(
  'inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium ring-offset-b2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-b1/90 data-[state=active]:text-ac data-[state=active]:shadow-sm',
  props.class,
)">
  <span class="truncate">
    <slot />
  </span>
</TabsTrigger>
</template>
