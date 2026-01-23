<script lang="ts" setup>
const props = defineProps<{
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Label :class="cn(badgeVariants({ variant, size }), props.class)">
    <slot />
  </Label>
</template>
