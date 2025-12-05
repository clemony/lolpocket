<script lang="ts" setup>
import type { ImgHTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  alt: ImgHTMLAttributes['alt']
  src: ImgHTMLAttributes['src']
  class?: HTMLAttributes['class']
  format?: string
  loading?: ImgHTMLAttributes['loading']
  decoding?: ImgHTMLAttributes['decoding']
  spinner?: boolean
}>(), {
  decoding: 'async',
  format: 'webp',
  loading: 'lazy'
})
</script>

<template>
  <div class="size-full shrink-0">
    <NuxtImg
      v-slot="{ src: source, isLoaded, imgAttrs }"
      :src="props.src"
      :format="props.format"
      custom>
      <img
        v-if="isLoaded"
        :src="source"
        :alt="props.alt"
        :loading="props.loading"
        :decoding="props.decoding"
        :class="cn(
          'size-full shrink-0 opacity-0 transition-[opacity,transform] duration-400',
          { 'translate-z-0 opacity-100 animate-in fade-in duration-400  transition-all duration-500': isLoaded },
          props.class,
        )"
        v-bind="imgAttrs" />
      <div
        v-else
        :class="cn('animate-in fade-in grid size-full shrink-0 place-items-center rounded-lg transition-all duration-500', { 'animate-out fade-out opacity-0  transition-all duration-500': isLoaded })"
        alt="placeholder">
        <Spinner v-if="props.spinner" />
        <Skeleton
          v-else
          class="size-full bg-b1" />
      </div>
    </NuxtImg>
  </div>
</template>
