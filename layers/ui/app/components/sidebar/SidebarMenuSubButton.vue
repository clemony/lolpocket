<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      size?: 'sm' | 'md'
      isActive?: boolean
      class?: HTMLAttributes['class']
    }
  >(),
  {
    as: 'a',
    size: 'md',
  }
)
</script>

<template>
  <Primitive
    data-slot="sidebar-menu-sub-button"
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="
      cn(
        'hover:text-sidebar-bc hover:bg-b3 on:text-sidebar-bc on:bg-b3 [&>svg]:text-sidebar-bc text-bc ring-bc/60 flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 ring outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:text-sidebar-bc data-[active=true]:bg-b3',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-md',
        'group-data-[collapsible=icon]:hidden',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
