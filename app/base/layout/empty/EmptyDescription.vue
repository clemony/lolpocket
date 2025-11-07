<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    data-slot="empty-description"
    :class="cn(
      'text-bc/60 [&>a:hover]:text-neutral /relaxed [&>a]:underline [&>a]:underline-offset-4',
      props.class,
    )">
    <slot />
  </p>
</template>
