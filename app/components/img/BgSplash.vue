<script setup lang="ts">
const { class: className, src } = defineProps<{
  class?: HTMLAttributes["class"]
  src: string | null | undefined
  slice?: boolean
}>()

const fallbackSrc = "/img/art/prestige-requiem-sona.jpeg"
const splashSrc = computed(() => fallbackSrc || src || fallbackSrc)
</script>

<template>
  <div
    :class="
      cn(
        'noise absolute inset-0 top-0 left-0 flex h-full w-screen items-center justify-end overflow-hidden bg-p1',
        className,
      )
    ">
    <div
      class="before:from-bg-tint-p2/60 noise pointer-events-none -mr-14 flex h-full w-screen flex-nowrap items-center justify-end justify-items-end mask-l-from-30% mask-l-to-70% before:absolute before:z-1 before:size-full before:bg-linear-to-r before:from-45% before:to-transparent before:to-75%">
      <NuxtImg
        :src="splashSrc"
        alt=""
        aria-hidden="true"
        width="1215"
        height="717"
        sizes="sm:26vw md:30vw lg:36vw"
        format="webp"
        quality="76"
        loading="lazy"
        decoding="async"
        class="z-0 h-full w-[36%] -translate-x-[30%] -scale-x-100 object-cover blur-sm duration-100" />
      <NuxtImg
        :src="splashSrc"
        alt=""
        aria-hidden="true"
        width="1215"
        height="717"
        sizes="100vw sm:94vw md:86vw lg:74vw"
        format="webp"
        quality="82"
        preload
        loading="eager"
        fetch-priority="high"
        decoding="async"
        class="absolute right-0 z-0 h-full w-[74%] mask-l-from-98% object-cover object-right contrast-110 grayscale-10 duration-100" />
      <div
        class="absolute top-0 left-0 z-1 size-full scale-x-104 scale-y-230 bg-radial-[at_80%_50%] from-transparent from-24% via-p2/60 via-42% to-p2 to-60%" />
    </div>
  </div>
</template>
