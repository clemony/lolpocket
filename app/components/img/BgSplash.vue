<script setup lang="ts">
const { class: className, src } = defineProps<{
  class?: HTMLAttributes["class"]
  src: string | null | undefined
  slice?: boolean
}>()

const fallbackSrc = ""
const splashSrc = computed(() => src || fallbackSrc)
</script>

<template>
  <div
    :class="
      cn(
        'noise absolute inset-0 top-0 left-0 flex size-full items-center justify-end overflow-hidden bg-p1',
        className
      )
    ">
    <div
      class="before:from-bg-tint-p2/60 noise pointer-events-none -mr-14 flex size-full flex-nowrap items-center justify-end justify-items-end mask-l-from-30% mask-l-to-70% before:absolute before:z-1 before:size-full before:bg-linear-to-r before:from-45% before:to-transparent before:to-75%">
      <NuxtImg
        :src="splashSrc"
        alt=""
        fetch-priority="high"
        aria-hidden="true"
        width="1215"
        height="717"
        sizes="100vw sm:94vw md:86vw lg:74vw"
        format="webp"
        quality="72"
        preload
        loading="eager"
        decoding="async"
        class="fixed right-0 z-0 h-full w-[80%] translate-y-[23%] mask-l-from-98% object-contain object-right contrast-110 grayscale-0 duration-100" />
      <div
        class="fixed top-0 left-0 z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%] from-transparent from-24% via-p2/60 via-42% to-p2 to-60%" />
    </div>
  </div>
</template>
