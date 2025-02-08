<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <button
    :class="cn('btn !pointer-events-auto btn-neutral rounded-md  flex btn-md  hover:text-nc hover:!bg-neutral/80 focus:text-nc active:text-nc !text-3 hover:text-nc px-2', props.class)"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>