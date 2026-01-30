<script lang="ts" setup>
import type { ImgHTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
    alt: ImgHTMLAttributes['alt']
    ratio?: number
    src: ImgHTMLAttributes['src']
    class?: HTMLAttributes['class']
    format?: string
    loading?: ImgHTMLAttributes['loading']
    decoding?: ImgHTMLAttributes['decoding']
    loadingType?: LoadingStyle
  }>(),
  {
    decoding: 'async',
    format: 'webp',
    loading: 'lazy',
    ratio: 1,
    variant: 'none',
  }
)

const emit = defineEmits(['load'])
</script>

<template>
  <div
    :class="
      cn(
        buttonVariants({
          base: 'btn',
          variant: props.variant,
          size: props.size,
        }),
        'relative inset-0 grid shrink-0 cursor-default place-items-center overflow-hidden border-0 p-0 select-none',
        props.class,
      )
    "
  >
    <NuxtImg
      v-slot="{ src: source, isLoaded, imgAttrs }"
      :src="props.src"
      :format="props.format"
      custom
    >
      <img
        v-if="isLoaded"
        v-bind="imgAttrs"
        :src="source"
        :alt="props.alt"
        :loading="props.loading"
        :decoding="props.decoding"
        :class="
          cn(
            'size-full shrink-0 opacity-0 transition-[opacity,transform] duration-400',
            {
              'animate-in fade-in translate-z-0 opacity-100 transition-all duration-400':
                isLoaded,
            },
          )
        "
        @load="emit('load')"
      >
      <div
        v-else
        :class="
          cn(
            'animate-in fade-in grid size-full shrink-0 place-items-center rounded-lg transition-all duration-500',
            {
              'animate-out fade-out opacity-0 transition-all duration-500':
                isLoaded,
            },
          )
        "
        alt="placeholder"
      >
        <span
          v-if="props.loadingType === 'spinner'"
          class="grid size-full shrink-0 place-items-center"
        >
          <Spinner />
        </span>

        <Skeleton v-else class="size-full" />
      </div>
    </NuxtImg>
    <slot />
  </div>
</template>
