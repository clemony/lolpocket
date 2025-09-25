<script setup lang="ts">
const { background, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  background: string
}>()

const img = useImage()

const bgClass = computed(() => `before:bg-url('${img(background)}')`)
</script>

<template>
  <div class="absolute dss -top-16 overflow-hidden h-120 bg-tint-b2/30 w-screen  isolate">
    <div
      class="h-full pointer-events-none -right-4 top-0 bottom-32 inset-0 before:size-full before:absolute before:z-1 before:bg-linear-to-r before:from-bg-tint-b2/60 before:from-45% before:to-75% before:to-transparent">
      <div
        :style="{
          backgroundImage: `url('${img(background)}')`,
        }"
        :class="
          cn(
            'size-full  bg-fixed bg-no-repeat  bg-position-[140%_-13%]  bg-size-[74%] mask-l-from-30% mask-l-to-60%  ',
          )
        " />
    </div>
  </div>
</template>
