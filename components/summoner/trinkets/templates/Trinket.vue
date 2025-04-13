<script lang="ts" setup>
import { motion } from 'motion-v'
import type { StyleValue } from 'vue'

const props = defineProps<{
  container?: any
  solid?: boolean
  class?: HTMLAttributes['class']
  size?: 'mini' | 'sm' | 'md' | 'lg'
  vertical?: boolean
  style?: StyleValue
}>()
</script>

<template>
  <motion.div
    drag :while-drag="{ scale: 1.1, zIndex: 20 }" :drag-constraints="props.container" :drag-transition="{
      power: 0,
      timeConstant: 200,
      /*   modifyTarget: target => Math.round(target / 25) * 25 , */
    }"
    class="grid place-items-center"
    :class="{ ' cursor-move bg-b1 shadow-[#000]/5  rounded-box shadow-warm-2': props.solid,
              'size-[150px]': props.size == 'mini',
              'w-[150px] h-[300px]': props.size == 'sm' && props.vertical,
              'w-[300px], h-[150px]': props.size == 'sm' && !props.vertical,
              'size-[300px]': props.size == 'md' }">
    <div
      class="size-full " :style="props.style"
      :class="cn('grid place-items-center relative', { 'inset-shadow-sm  border border-b2 rounded-box  overflow-hidden': props.solid }, props.class)">
      <slot />
    </div>
  </motion.div>
</template>