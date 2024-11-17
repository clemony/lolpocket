<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div data-sidebar="group-content" :class="cn('w-full text-base', props.class)">
  <slot />
</div>
</template>
