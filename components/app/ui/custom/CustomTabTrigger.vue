<script setup lang="ts">
import { TabsTrigger, useForwardProps } from 'reka-ui'
import type { TabsTriggerProps } from 'reka-ui'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Motion
    as-child
    @hover-start="(event) => console.log('hover start', event)"
    @hover-end="(event) => console.log('hover end', event)">
    <TabsTrigger
      v-bind="forwardedProps"
      :class="cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-2 font-medium ring-offset-b1 transition-all focus-visible:outline-none tldr-20 focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:!text-2 data-[state=active]:bg-b1 font-medium data-[state=active]:font-medium data-[state=active]:border-b3/80 text-2 data-[state=active]:btn data-[state=active]:drop-shadow-xxs data-[state=active]:border data-[state=active]:text-bc ',
        props.class,
      )">
      <span class="truncate">
        <slot />
      </span>
    </TabsTrigger>
  </Motion>
</template>
