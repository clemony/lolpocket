<script setup lang="ts">
import { ChevronRightIcon } from '@radix-icons/vue'
import {
  ContextMenuSubTrigger,

  useForwardProps,
} from 'reka-ui'
import type { ContextMenuSubTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-2 outline-none focus:bg-b2 focus:text-neutral-bc data-[state=open]:bg-b2 data-[state=open]:text-neutral-bc',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
    <ChevronRightIcon class="ml-auto h-4 w-4" />
  </ContextMenuSubTrigger>
</template>
