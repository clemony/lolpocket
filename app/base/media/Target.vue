<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

/*   before:absolute before:-mb-px before:-ml-px before:size-full before:scale-105 before:bg-[url(\'/img/ui/frame.webp\')] before:bg-contain before:opacity-0 before:transition-all before:duration-200 */
</script>

<template>
  <button
    :class="cn('no-drag !p-0 search-drop bg-b2/20 group border-box hover:border-bc/30  relative z-0 cursor-pointer! rounded-lg border inset-shadow-sm border-b3 grid place-items-center', props.class)"
    class="relative">
    <div class="size-full absolute overflow-hidden">
      <i-fullscreen class="size-full opacity-0 group-hover:opacity-50 group-hover:scale-120 scale-150 transition-all duration-300" />
    </div>

    <icon
      name="add"
      class="size-3.5 opacity-30 group-hover:opacity-50 stroke-[1.3]" />

    <slot />
  </button>
</template>

<style scoped></style>
