<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translate(-10px, 0)',
  },
  visible: {
    opacity: 1,
    transform: 'translate(0px, 0)',
  },
}
</script>

<template>
  <Motion
    as-child
    :variants="variants">
    <icon
      name="right-sm"
      :class="cn('stroke-[1.2] shrink-0', className)" />
  </Motion>
</template>