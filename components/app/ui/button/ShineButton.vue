<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <label :class="cn(' rounded-full flex shadow-sm justify-center items-center  cursor-pointer border border-transparent', props.class)">

    <div :class="cn('group  flex rounded-full justify-center items-center relative  overflow-hidden', props.class)">

      <slot />

      <div class="absolute top-0 -translate-x-[150%]  h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40  group-hover:translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
    </div>
  </label>
</template>

<style scoped>

</style>
