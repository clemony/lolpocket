<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    data-slot="empty-description"
    :class="
      cn('/relaxed text-bc/60 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-neutral',
        props.class,
      )
    ">
    <slot />
  </p>
</template>
