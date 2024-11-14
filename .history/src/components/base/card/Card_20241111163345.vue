<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div :class="cn(
  'rounded-box border bg-base-100/90 backdrop-blur-md shadow-smooth',
  props.class,
)
  ">
  <slot />
</div>
</template>
