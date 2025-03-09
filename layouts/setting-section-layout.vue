<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="size-full">
    <div :class="cn('grid w-full grid-cols-3 gap-10 px-2 *:size-full', props.class)">
      <slot />
    </div>

    <div class="border-t-b2 mt-12 flex border-t pt-10 px-2">
      <button class="btn">
        Save
      </button>
      <Grow />
    </div>
  </div>
</template>

<style scoped></style>
