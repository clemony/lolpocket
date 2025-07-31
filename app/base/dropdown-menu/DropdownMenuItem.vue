<script setup lang="ts">
import type { DropdownMenuItemProps } from 'reka-ui'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwarded"
    :class="cn(
      'relative w-full flex cursor-default select-none items-center rounded-lg gap-3 px-2 py-2 text-2 outline-none transition-colors focus:bg-b2 focus:text-n1-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-5 [&>svg]:shrink-0',
      inset && 'pl-8',
      props.class,
    )">
    <slot />
  </DropdownMenuItem>
</template>
