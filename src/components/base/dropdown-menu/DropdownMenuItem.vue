<script setup lang="ts">
import { cn } from '@lib/utils'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
<DropdownMenuItem v-bind="forwardedProps" :class="cn(
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 gap-3 font-size-2 font-medium outline-hidden transition-colors focus:bg-b2/60 focus:font-size-4-content data-disabled:pointer-events-none data-disabled:opacity-50',
  inset && 'pl-8',
  props.class,
)">
  <slot />
</DropdownMenuItem>
</template>
