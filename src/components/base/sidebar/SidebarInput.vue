<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template><Input data-sidebar="input" :class="cn(
  'h-8 w-full bg-transparent shadow-none focus-visible:ring-2 focus-visible:ring-accent/5',
  props.class,
)">
<slot />
</Input>
</template>
