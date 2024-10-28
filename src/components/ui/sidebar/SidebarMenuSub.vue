<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<ul data-sidebar="menu-badge" :class="cn(
  'mr-3.5 ml-[18px] flex min-w-0 translate-x-px flex-col gap-1 border-l border-base-300 px-2.5 py-0.5',
  'group-data-[collapsible=icon]:hidden',
  props.class,
)">
  <slot />
</ul>
</template>
