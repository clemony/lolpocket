<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div :class="cn(
  'rounded-xl border bg-b1/90 backdrop-blur-md shadow-smooth',
  props.class,
)
  ">
  <slot />
</div>
</template>
