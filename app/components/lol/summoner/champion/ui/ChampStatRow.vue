<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
}>()
</script>

<template>
  <div
    :data-style="simple ? 'simple' : 'full'"
    :class="
      cn(
        'relative flex h-34 w-full items-center overflow-hidden',
        { 'h-28!': simple },
        className,
      )
    "
  >
    <slot />
  </div>
</template>
