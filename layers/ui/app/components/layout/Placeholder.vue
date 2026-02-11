<script setup lang="ts">
import type { PlaceholderVariants } from "#layers/ui/app/assets/variants/placeholder"
import { placeholderVariants } from "#layers/ui/app/assets/variants/placeholder"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  color?: PlaceholderVariants["color"]
  size?: PlaceholderVariants["size"]
}>()
</script>

<template>
  <span :class="cn(placeholderVariants({ color, size }), className)" />
</template>
