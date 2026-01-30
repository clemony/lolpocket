<script setup lang="ts">
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
        'bgneutral/86 border-accent! text-nc/80 rounded-xl! border backdrop-blur-lg backdrop-brightness-175',
        props.class,
      )
    "
    @interact-outside="emit('interact-outside')"
  >
    <slot />
  </PopoverContent>
</template>
