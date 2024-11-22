<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<Separator data-sidebar="separator" :class="cn('mx-2 w-auto bg-b2', props.class)">
  <slot />
</Separator>
</template>
