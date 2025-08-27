<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  alignOffset?: number
  align?: Align
  side?: Side
}>()
const emit = defineEmits(['interact-outside'])
</script>

<template>
  <!-- eslint-disable vue/custom-event-name-casing -->

  <PopoverContent

    :side-offset="props.sideOffset"
    :align-offset="props.alignOffset"
    :align="props.align"
    :side="props.side"
    :class="
      cn(
        '!rounded-xl border backdrop-blur-lg !border-accent  bgneutral/86 backdrop-brightness-175 text-nc/80',
        props.class,
      )
    "
    @interact-outside="emit('interact-outside')">
    <slot />
  </PopoverContent>
</template>
