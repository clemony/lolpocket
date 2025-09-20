<script lang="ts" setup>
const {
  as = 'div',
  class: className,
  invert = false,
  mode = 'out-in',
} = defineProps<{
  class?: HTMLAttributes['class']
  as?: string
  mode?: 'out-in' | 'in-out'
  invert?: boolean
}>()
</script>

<template>
  <transition-slide
    group
    :appear="false"
    :as="as"
    :class="cn(className)"
    :mode="mode"
    :offset="
      !invert
        ? {
          enter: ['100%', 0],
          leave: ['-100%', 0],
        }
        : {
          enter: ['-100%', 0],
          leave: ['100%', 0],
        }
    ">
    <slot />
  </transition-slide>
</template>
