<script setup lang="ts">
import type { DropdownMenuItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { DropdownMenuItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
      cn(
        'text-2 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center gap-3 rounded-md px-2 py-1.5 font-medium outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
