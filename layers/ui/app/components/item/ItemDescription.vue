<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    data-slot="item-description"
    :class="
      cn(
        'line-clamp-2 leading-normal font-normal text-balance text-pc/60',
        `[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-neutral`,
        props.class,
      )
    ">
    <slot />
  </p>
</template>
