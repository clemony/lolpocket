<script lang="ts" setup>
import type { BadgeVariants } from './badge-variants'
import { badgeVariants } from './badge-variants'

const props = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Label :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </Label>
</template>
