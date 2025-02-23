<script setup lang="ts">
import { ChevronRightIcon } from '@radix-icons/vue'
import { MenubarSubTrigger, useForwardProps } from 'reka-ui'
import type { MenubarSubTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<MenubarSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm pl-2 pr-2.5 py-1.5 text-2 outline-none focus:bg-b2  gap-3 focus:text-neutral-bc data-[state=open]:bg-b2 data-[state=open]:text-neutral-bc data-disabled:!bg-b2/60 data-disabled:opacity-60 data-disabled:pr-2.75 group',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
    <icon name="right-sm" class="ml-auto size-4.5 group-data-disabled:hidden" />
  </MenubarSubTrigger>
</template>
