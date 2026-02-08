<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']

}>()
</script>

<template>
  <div
    v-bind="props"
    :class="
      cn(
        'group/el',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
