<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div data-sidebar="menu-badge" :class="cn(
  'absolute right-1 flex  min-w-5 items-center justify-center px-1  !text-[11px] font-medium tabular-nums  select-none pointer-events-none',
  'peer-hover/menu-button:text-base-content peer-data-[active=true]/menu-button:text-base-content',
  'peer-data-[size=sm]/menu-button:top-1',
  'peer-data-[size=default]/menu-button:top-1.5',
  'peer-data-[size=lg]/menu-button:top-2.5',
  'group-data-[collapsible=icon]:hidden',
  props.class,
)">
  <slot />
</div>
</template>
