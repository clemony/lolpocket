<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  size?: InputGroupVariants['size']
  variant?: InputGroupVariants['variant']
  hover?: InputGroupVariants['hover']
}>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(

      inputGroupVariants({ size, variant, hover }),
      props.class,
    )">
    <slot />
  </div>
</template>
