<script setup lang="ts">

import {
  DropdownMenuSubTrigger,

  useForwardProps,
} from 'reka-ui'
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-2 outline-none focus:bg-b2 data-[state=open]:bg-neutral',
      props.class,
    )"
  >
    <slot />
    <icon name="right-sm" class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
