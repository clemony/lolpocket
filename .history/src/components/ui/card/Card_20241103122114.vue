<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div :class="cn(
  'rounded-lg border bg-base-100/90 backdrop-blur-md shadow-sm ',
  props.class,
)
  ">
  <slot />
</div>
</template>
