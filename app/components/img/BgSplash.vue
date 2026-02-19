<script setup lang="ts">
import { useTransform } from "motion-v"

const {
  class: className,
  slice,
  src: i,
} = defineProps<{
  class?: HTMLAttributes["class"]
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
    return `url('${img("/img/art/prestige-requiem-sona.jpeg", { quality: 100 })}')`
  } catch {
    return undefined
  }
})
</script>

<template>
  <div
    class="absolute inset-0 flex w-screen items-center justify-end overflow-hidden bg-p1 noise">
    <div
      class="before:from-bg-tint-p2/60 pointer-events-none relative top-0 bottom-32 -mr-14 flex h-full w-screen flex-nowrap items-center justify-end justify-items-end noise mask-l-from-30% mask-l-to-70% before:absolute before:z-1 before:size-full before:bg-linear-to-r before:from-45% before:to-transparent before:to-75%">
      <div
        :style="{
          backgroundImage: bg,
        }"
        :class="
          cn(
            'z-0 h-full w-[36%] -translate-x-[30%] -scale-x-100 bg-fixed bg-no-repeat blur-sm duration-100'
          )
        " />
      <div
        :style="{
          backgroundImage: bg,
          backgroundPositionX: '100%',
        }"
        :class="
          cn(
            'absolute right-0 z-0 h-full w-[74%] mask-l-from-98% bg-size-[80%] bg-fixed bg-no-repeat contrast-110 grayscale-10 duration-100'
          )
        " />
      <div
        class="absolute top-0 left-0 z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%] from-transparent from-24% via-p2/60 via-42% to-p2 to-60%" />
    </div>
  </div>
</template>
