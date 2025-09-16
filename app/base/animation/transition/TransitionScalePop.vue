<script lang="ts" setup>
const {
  class: className,
  as = 'div',
  mode = 'out-in',
  scale = 0.8,
  origin = 'top',
} = defineProps<{
  class?: HTMLAttributes['class']
  as?: string
  mode?: 'out-in' | 'in-out'
  scale?: number
  origin?: string
}>()
</script>

<template>
  <transition-scale
    group
    :as="as"
    :appear="false"
    :class="cn(className)"
    :mode="mode"
    :origin="origin"
    :scale="scale">
    <slot />
  </transition-scale>
</template>
