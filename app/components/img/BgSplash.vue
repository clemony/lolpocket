<script setup lang="ts">
import { easeInOut, motion } from 'motion-v'

const {
  class: className,
  img: i,
  size,
  slice,
} = defineProps<{
  class?: HTMLAttributes['class']
  img: string | null
  size: 'header' | 'full'
  slice?: boolean
}>()

const img = useImage()
const { scrollY } = useScrollInject()

const y = useTransform(scrollY, [0, 200], ['0%', '2%'], {
  ease: easeInOut,
})

const bg = computed(() => {
  if (!i)
    return null
  return `url('${img(i, { quality: 100 })}')`
})
</script>

<template>
  <div
    :class="
      cn('absolute -top-16 isolate flex w-screen justify-end bg-tint-b2/30 dss', {
        'h-120': size === 'header',
        'h-[90vh]': size === 'full',
      })
    ">
    <div
      :class="
        cn('before:from-bg-tint-b2/60 before:absolute before:z-1 before:size-full before:bg-linear-to-r before:to-transparent pointer-events-none relative top-0 bottom-32 -mr-14 flex h-full w-screen grid-rows-1 flex-nowrap justify-end justify-items-end',
           {
             'mask-l-from-20% mask-l-to-66% before:from-0% before:to-75% ':
               slice,
             'mask-l-from-30% mask-l-to-70% before:from-45% before:to-75%':
               !slice,
             '': size === 'header',
             '': size === 'full',
           },
        )
      ">
      <motion.div
        v-if="!slice"
        :style="{
          backgroundImage: bg,
          backgroundPositionX: size === 'full' ? '0' : '0',
          backgroundPositionY: y,
          backgroundSize: size === 'full' ? 'cover' : 'auto',
        }"
        :class="
          cn('z-0 size-full w-[36%] -translate-x-[30%] -scale-x-100 bg-auto bg-fixed bg-no-repeat blur-sm duration-100',
          )
        " />

      <motion.div
        :style="{
          backgroundPositionX: size === 'full' ? '0' : '0',
          backgroundSize: 'auto',
          backgroundImage: bg,
          translateY: y,
        }"
        :class="
          cn('z-0 size-full mask-l-from-98% bg-no-repeat contrast-110 grayscale-10 duration-100',
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
