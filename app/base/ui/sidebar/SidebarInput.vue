<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { Input } from 'base/ui/input'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    :class="cn(
      'bg-b1 input inset-shadow-xs inset-shadow-black/4 text-2 h-10 border-b3/80 w-full shadow-none',
      props.class,
    )">
    <slot />
  </Input>
</template>
