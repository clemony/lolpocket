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
  },
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
      cn('hover:text-sidebar-bc hover:bg-b3 on:text-sidebar-bc on:bg-b3 [&>svg]:text-sidebar-bc [&>svg]:size-4 [&>svg]:shrink-0 flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-bc ring ring-bc/60 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate',
        'data-[active=true]:text-sidebar-bc data-[active=true]:bg-b3',
        size === 'sm' && 'text-2',
        size === 'md' && 'text-3',
        'group-data-[collapsible=icon]:hidden',
        props.class,
      )
    ">
    <slot />
  </Primitive>
</template>
