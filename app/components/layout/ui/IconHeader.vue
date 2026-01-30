<script lang="ts" setup>
import { motion } from 'motion-v'

const { class: className, textWrapper } = defineProps<{
  class?: HTMLAttributes['class']
  textWrapper?: HTMLAttributes['class']
}>()

const { scrollY } = useScrollInject()
const y = useTransform(scrollY, [0, 198], ['0', '20%'])
const opacity = useTransform(scrollY, [0, 198], [1, 0])
</script>

<template>
  <motion.div
    :class="
      cn(
        'absolute flex h-20 w-fit max-w-220 -translate-x-3 flex-nowrap items-center gap-6',
        className,
      )
    "
    :style="{
      /*  y, */
      opacity,
    }"
  >
    <!-- icon -->

    <div class="relative grid size-20 place-items-center">
      <slot name="icon" />
    </div>
    <div
      :class="cn('flex w-full flex-col justify-center gap-1.5', textWrapper)"
    >
      <!-- header name -->
      <div class="flex max-h-12 w-full items-center gap-8">
        <slot name="title" />
      </div>

      <!-- header sub-text -->
      <div
        class="dst **:text-md inline-flex flex-nowrap gap-2 font-normal text-nowrap lowercase"
      >
        <slot name="subheader" />
      </div>
    </div>
  </motion.div>
</template>
