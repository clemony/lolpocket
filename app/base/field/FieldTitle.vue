<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="field-label"
    :class="cn(
      'flex w-fit items-center gap-2 text-5  leading-snug font-semibold group-data-[disabled=true]/field:opacity-50',
      props.class,
    )">
    <slot />
  </div>
</template>
