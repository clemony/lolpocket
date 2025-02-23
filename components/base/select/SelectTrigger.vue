<script setup lang="ts">
import { ChevronDownIcon } from '@radix-icons/vue'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import type { SelectTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-b2  border border-b2 -input bg-transparent px-3 py-2 text-2 shadow-sm ring-offset-b1 data-[placeholder]:text-b2-bc focus:outline-none focus:ring-1 focus:ring-b2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDownIcon class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
