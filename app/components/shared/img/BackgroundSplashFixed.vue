<script setup lang="ts">
const { class: className, background } = defineProps<{
  class?: HTMLAttributes['class']
  background: string
}>()

const img = useImage()

const bgClass = computed(() => `before:bg-url('${img(background)}')`)
</script>

<template>
  <div
    class="absolute h-full isolate pointer-events-none right-0 top-0 bottom-32 inset-0 before:size-full before:absolute before:z-1 before:bg-linear-to-r before:from-[color-mix(in_oklab,var(--color-b2)_60%,white_40%)] before:from-45% before:to-75% before:to-transparent">
    <div
      :style="{
        backgroundImage: `url('${img(background)}')`,
      }"
      :class="
        cn(
          'size-full  bg-fixed bg-no-repeat  bg-position-[140%_-33%]  bg-size-[74%] mask-l-from-30% mask-l-to-60%  ',
        )
      " />
  </div>
</template>
