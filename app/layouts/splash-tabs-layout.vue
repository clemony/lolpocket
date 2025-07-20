<script lang="ts" setup>
import { motion } from 'motion-v'

const headerHeight = ref(242)

const virtualScrollPosition = useMotionValue(0)
/* const headerHeight = useSpring(useTransform(virtualScrollPosition, [0, 500], [290, 120]), {
  bounce: 0.15,
  duration: 0.25,
}) */
/*
useMotionValueEvent(headerHeight, 'change', (latest) => {
  console.log('💠 - useMotionValueEvent - latest:', latest)
}) */
</script>

<template>
  <div class="items-center w-screen h-screen pt-(--navbar-height) flex flex-col relative overflow-hidden">
    <slot name="backdrop" />

    <motion.div
      class="w-full  px-10 relative px-4 flex justify-center items-end    overflow-hidden gap-12  "
      :style="{
        height: `${headerHeight}px`,
      }">

      <div class=" pl-4  absolute size-full items-end  grid  z-1 max-w-[1050px]">
        <slot name="header" />
      <div class="flex gap-1  items-center">
        <slot name="tabs" />

      </div>

      </div>

      <Separator class="my-0 bg-linear-to-r from-b2 from-30% to-b3 h-[2px] absolute bottom-0 left-0 w-full" />
    </motion.div>

    <div
      class="w-full justify-center relative"
      :style="{
        height: `calc(100% - ${headerHeight}px)`,

      }">
      <slot name="page" />
    </div>
  </div>
</template>