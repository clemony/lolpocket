<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="menu-badge"
    :class="
      cn(
        '!text-1 pointer-events-none absolute right-1 flex min-w-5 items-center justify-center px-1 tabular-nums select-none',
        'peer-hover/menu-button:text-bc peer-data-[active=true]/menu-button:text-bc',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
