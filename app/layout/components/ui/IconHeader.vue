<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { scrollY } = useScrollInject()
const y = useTransform(scrollY, [0, 198], ['0', '-200%'])
const opacity = useTransform(scrollY, [0, 99, 198], [1, 1, 0])
</script>

<template>
  <motion.div
    :class="
      cn(
        'absolute flex flex-nowrap items-center gap-6 -translate-x-3 items-center h-20  w-fit max-w-220 ',
        className,
      )
    "
    :style="{
      y,
      opacity,
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
  </motion.div>
</template>
