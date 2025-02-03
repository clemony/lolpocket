<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { Primitive } from 'radix-vue'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      size?: 'sm' | 'md' | 'lg' | 'icon'
      isActive?: boolean
      class?: HTMLAttributes['class']
    }
  >(),
  {
    as: 'a',
    size: 'lg',
  },
)
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="
      cn(
        'text-bc ring-b3 hover:bg-b2 active:bg-b2 [&>svg]:text-bc flex h-8 w-full min-w-0 -translate-x-px cursor-pointer items-center gap-2 overflow-hidden rounded-md px-2 py-5 outline-hidden focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-5 [&>svg]:shrink-0',
        'data-[active=true]:bg-neutral/5 data-[active=true]:text-bc',
        size === 'sm' && 'text-3',
        size === 'md' && 'text-3',
        size === 'lg' && 'text-3',
        'group-data-[collapsible=icon]:hidden',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
