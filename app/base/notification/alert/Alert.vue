<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { AlertVariants } from './alert-variants'
import { alertVariants } from './alert-variants'

const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: AlertVariants['variant']
}>()
</script>

<template>
  <div
    :class="cn(alertVariants({ variant }), props.class)"
    role="alert">
    <slot />
  </div>
</template>
