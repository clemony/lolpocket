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
      'absolute dss -top-16   bg-tint-b2/30 w-screen  isolate',
      {
        'h-120': size === 'header',
        'h-[90vh]': size === 'full',
      })">
    <div
      :class="cn(
        'size-full grid-rows-1 flex flex-nowrap pointer-events-none -right-4 top-0 bottom-32  before:size-full before:absolute before:z-1 before:bg-linear-to-r before:from-bg-tint-b2/60 before:to-transparent relative',
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
            'size-full -scale-x-100 z-0  duration-100 -translate-x-[30%] bg-fixed bg-no-repeat w-[36%]  bg-auto  blur-sm',
          )
        " />

      <motion.div
        :style="{
          backgroundImage: bg,
          translateY: y,
        }"
        :class="
          cn(
            'size-full col-start-2 w-80% mask-l-from-98% z-0 bg-cover bg-fixed  contrast-110 grayscale-10 duration-100 bg-fixed bg-no-repeat min-w-7xl  ',
          )
        " />
      <div class="size-full absolute z-1 from-transparent scale-x-104 scale-y-230 bg-radial-[at_80%_50%] to-b2 via-b2/60 via-42% from-24% to-60% " />
    </div>
  </div>
</template>
