<script lang="ts" setup>
const {
  as = 'div',
  class: className,
  mode = 'out-in',
  origin = 'top',
  scale = 0.8,
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
