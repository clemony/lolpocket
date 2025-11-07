<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    data-slot="item-description"
    :class="cn(
      'text-bc/60 line-clamp-2  leading-normal font-normal text-balance',
      '[&>a:hover]:text-neutral [&>a]:underline [&>a]:underline-offset-4',
      props.class,
    )">
    <slot />
  </p>
</template>
