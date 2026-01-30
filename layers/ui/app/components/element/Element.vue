<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  on?: ButtonVariants['on']
  hover?: ButtonVariants['hover']
  base?: ButtonVariants['base']
}>()
</script>

<template>
  <div
    v-bind="props"
    :class="
      cn(
        'group/el',
        elementVariants({ base, variant, on, size, hover }),
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
