<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
}>()
</script>

<template>
  <div
    :class="cn('flex! size-full items-center gap-4 overflow-x-scroll border-b border-b-b3/80 px-3 pt-3 pb-2.5', { 'py-3 h-28': simple }, className)">
    <slot />
  </div>
</template>