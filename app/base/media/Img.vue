<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  alt,
  class: className,
  img,
  preload = false,
  sizes,
} = defineProps<{
  alt: string
  sizes?: string[]
  preload?: boolean
  img: string | null
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <label :class="cn('size-full relative shrink-0 transform-3d select-none', className)">
    <NuxtImg
      :key="img"
      format="webp"
      :sizes
      :preload
      decoding="async"
      loading="lazy"
      :src="img"
      placeholder-class="skeleton size-full bg-blend-screen rounded-lg bg-b3 border-b3 inset-shadow-5 inset-shadow-xs border !opacity-40"
      v-bind="$attrs"
      :alt="alt"
      :class="
        cn('size-full opacity-0 transition-[opacity,transform]', {
          'translate-z-0 opacity-100': loaded,
        })
      "
      @load="loaded = true"></NuxtImg>
    <slot />
  </label>
</template>
