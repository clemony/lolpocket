<script setup lang="ts">
import { DropdownMenuItem, useForwardProps } from 'reka-ui'
import type { DropdownMenuItemProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

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
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-2 outline-none transition-colors focus:bg-b2 focus:text-neutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-5 [&>svg]:shrink-0',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuItem>
</template>
