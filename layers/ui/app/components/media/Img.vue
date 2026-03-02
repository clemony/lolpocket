<script lang="ts" setup>
import type { ImgHTMLAttributes } from "vue"

const props = withDefaults(
  defineProps<{
    alt: ImgHTMLAttributes["alt"]
    ratio?: number
    src: ImgHTMLAttributes["src"]
    class?: HTMLAttributes["class"]
    format?: string
    loading?: ImgHTMLAttributes["loading"]
    decoding?: ImgHTMLAttributes["decoding"]
    loadingType?: LoadingStyle
  }>(),
  {
    decoding: "async",
    format: "webp",
    loading: "lazy",
    ratio: 1,
  },
)

const emit = defineEmits(["load"])
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none relative grid shrink-0 cursor-default place-items-center overflow-hidden border-0 p-0 select-none',
        props.class,
      )
    ">
    <NuxtImg
      v-slot="{ src: source, isLoaded, imgAttrs }"
      :src="props.src"
      :format="props.format"
      custom>
      <img
        v-if="isLoaded"
        v-bind="imgAttrs"
        :src="source"
        :alt="props.alt"
        :loading="props.loading"
        :decoding="props.decoding"
        :class="
          cn(
            'pointer-events-none size-full shrink-0 opacity-0 transition-[opacity,transform] duration-400',
            {
              'animate-in fade-in translate-z-0 opacity-100 transition-all duration-400':
                isLoaded,
            },
          )
        "
        @load="emit('load')" />
      <div
        v-else
        :class="
          cn(
            'animate-in fade-in pointer-events-none absolute inset-0 top-0 left-0 grid size-full shrink-0 place-items-center rounded-lg transition-all duration-500',
            {
              'animate-out fade-out opacity-0 transition-all duration-500':
                isLoaded,
            },
          )
        "
        alt="placeholder">
        <span
          v-if="props.loadingType === 'spinner'"
          class="grid size-full shrink-0 place-items-center">
          <LazySpinner />
        </span>

        <LazyUSkeleton v-else class="inset-0 size-full grow" />
      </div>
    </NuxtImg>
    <slot />
  </div>
</template>
