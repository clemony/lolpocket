<script setup lang="ts">
import { useTransform } from 'motion-v'

const {
  class: className,
  slice,
  src: i,
} = defineProps<{
  class?: HTMLAttributes['class']
  src: string | null | undefined
  slice?: boolean
}>()

const img = useImage()
const { scrollY } = useScrollInject()

const fallback = useMotionValue(0)
const source = scrollY ?? fallback

// numeric only
const yPx = useTransform(source, [0, 200], [0, 24])

const bg = computed(() => {
  if (!i) return undefined
  try {
    return `url('${img(i, { quality: 100 })}')`
  }
  catch {
    return undefined
  }
})
</script>

<template>
  <div
    class="bg-muted noise absolute inset-0 overflow-hidden  items-center flex  w-screen justify-end"
  >
    <div
      class=" before:from-bg-tint-b2/60 noise pointer-events-none relative top-0 bottom-32 -mr-14 flex items-center h-full w-screen  flex-nowrap justify-end justify-items-end before:absolute before:z-1 before:size-full before:bg-linear-to-r before:to-transparent mask-l-from-30% mask-l-to-70% before:from-45% before:to-75% "
    >
      <div
        :style="{
          backgroundImage: bg,
        }"
        :class="
          cn(
            'z-0 w-[36%] h-full -translate-x-[30%] -scale-x-100 bg-fixed bg-no-repeat blur-sm duration-100',
          )
        "
      />
      <div
        :style="{
          backgroundImage: bg,
          backgroundPositionX: '100%',
        }"
        :class="
          cn(
            'z-0 w-[74%] mask-l-from-98% h-full bg-size-[80%] absolute right-0  bg-no-repeat contrast-110 bg-fixed grayscale-10 duration-100',
          )
        "
      />
      <div
        class="via-b2/60 to-b2 absolute top-0 left-0  z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%] from-transparent from-24% via-42% to-60%"
      />
    </div>
  </div>
</template>
