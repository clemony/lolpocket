<script lang="ts" setup>
const {
  class: className,
  as = 'div',
  mode = 'out-in',
  invert = false,
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
          enter: [0, '-100%'],
          leave: [0, '100%'],
        }
        : {
          enter: [0, '100%'],
          leave: [0, '-100%'],
        }
    ">
    <slot />
  </transition-slide>
</template>
