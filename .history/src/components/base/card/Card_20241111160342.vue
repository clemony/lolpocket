<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
<div :class="cn(
  'rounded-box border bg-base-100/90 backdrop-blur-md shadow-[rgba(17,_17,_26,_0.07)_0px_0px_16px] ',
  props.class,
)
  ">
  <slot />
</div>
</template>
