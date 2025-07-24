<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']

}>()
const target = ref()
const { isOutside } = useMouseInElement(target)
</script>

<template>
  <label
    ref="target"
    :class="cn(' rounded-full flex shadow-sm justify-center items-center   border border-transparent', props.class)">

    <div :class="cn('group  flex rounded-full justify-center items-center relative  overflow-hidden', props.class)">

      <slot />

      <div
        class="absolute top-0 -translate-x-[150%]  h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40  group-hover:translate-x-full opacity-0 group-hover:opacity-100 tldr-40 "
        :class="{ 'opacity-0 hidden': isOutside }" />
    </div>
  </label>
</template>
