<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  noFade?: boolean
}>()
</script>

<template>
  <header
    class="bg-b1/60 mask mask-x-3 pointer-events-none absolute z-20 mt-[35px] flex h-22 w-full shrink-0 items-center gap-3 px-12 pt-3.5 backdrop-blur-md"
  >
    <slot />
  </header>
</template>

<style scoped></style>
