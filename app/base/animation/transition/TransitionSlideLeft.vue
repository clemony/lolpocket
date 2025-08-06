<script lang="ts" setup>
const { class: className, as = 'div', mode = 'out-in', invert = false } = defineProps<{
  class?: HTMLAttributes['class']
  as?: string
  mode?: 'out-in' | 'in-out'
  invert?: boolean
}>()
</script>

<template>
  <transition-slide
    group
    :as="as"
    :class="cn(className)"
    :mode="mode"
    :offset="!invert ? {
      enter: ['100%', 0],
      leave: ['-100%', 0],
    }
      : {
        enter: ['-100%', 0],
        leave: ['100%', 0],
      } ">
    <slot />
  </transition-slide>
</template>