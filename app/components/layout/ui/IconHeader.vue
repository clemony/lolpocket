<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { scrollY } = useScrollInject()
const y = useTransform(scrollY, [0, 208], ['0', '-200%'])

useMotionValueEvent(scrollY, 'change', (latest) => {
  console.log('Page scroll: ', Math.round(latest * 100) / 100)
  console.log('🌱 - y:', y)
})
</script>

<template>
  <motion.header
    :class="
      cn(
        'absolute flex flex-nowrap items-center gap-4  items-center h-20  w-fit max-w-220 ',
        className,
      )
    "
    :style="{
      transform: `translateY(${y})`,
    }">
    <!-- icon -->

    <div class="size-20 place-items-center relative grid">
      <slot name="icon" />
    </div>
    <div class="flex flex-col pt-1.5 justify-center gap-1.5 w-full">
      <!-- header name -->
      <div class="flex items-center  w-full gap-8 max-h-12">
        <slot name="title" />
      </div>

      <!-- header sub-text -->
      <div
        class="inline-flex **:text-3 dst flex-nowrap text-nowrap lowercase gap-2  font-normal">
        <slot name="subheader" />
      </div>
    </div>
  </motion.header>
</template>
