<script setup lang="ts">
import { circOut, easeInOut, motion } from 'motion-v'

const { class: className, img: i, size, slice } = defineProps<{
  class?: HTMLAttributes['class']
  img: string
  size: 'header' | 'full'
  slice?: boolean
}>()

const img = useImage()
const { scrollYProgress } = useScrollInject()

const y = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'], { ease: easeInOut })

const bg = computed (() => `url('${img(i.replace('tile', 'centered'), { quality: 100 })}')`)
</script>

<template>
  <!--  translate-x-[30%] -->
  <div
    :class="cn(
      'absolute -top-16 isolate w-screen bg-tint-b2/30 dss',
      {
        'h-120': size === 'header',
        'h-[90vh]': size === 'full',
      })">
    <div
      :class="cn(
        `
          before:from-bg-tint-b2/60 before:absolute before:z-1 before:size-full
          before:bg-linear-to-r before:to-transparent
          pointer-events-none relative top-0 -right-4 bottom-32 flex size-full
          grid-rows-1 flex-nowrap
        `,
        {
          'mask-l-from-20% mask-l-to-66% before:from-0% before:to-75% ': slice,
          'mask-l-from-30% mask-l-to-70% before:from-45% before:to-75%': !slice,
          '': size === 'header',
          '': size === 'full',
        })">
      <motion.div
        v-if="!slice"
        :style="{
          backgroundImage: bg,
          backgroundPositionX: size === 'full' ? '5%' : '140%',
          backgroundPositionY: y,
          backgroundSize: size === 'full' ? 'cover' : 'auto',
        }"
        :class="
          cn(
            `
              z-0 size-full w-[36%] -translate-x-[30%] -scale-x-100 bg-auto
              bg-fixed bg-no-repeat blur-sm duration-100
            `,
          )
        " />

      <motion.div
        :style="{
          backgroundImage: bg,
          translateY: y,
        }"
        :class="
          cn(
            `
              w-80% z-0 col-start-2 size-full min-w-7xl mask-l-from-98% bg-cover
              bg-fixed bg-no-repeat contrast-110 grayscale-10 duration-100
            `,
          )
        " />
      <div
        class="
          absolute z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%]
          from-transparent from-24% via-b2/60 via-42% to-b2 to-60%
        " />
    </div>
  </div>
</template>
