<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  alt: string
  sizes?: string[]
  preload?: boolean
  img: string | null
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <div
    v-if="!loaded"
    class="grid size-full place-items-center">
    <Spinner />
  </div>
  <NuxtImg
    :key="props.img"
    format="webp"
    :sizes
    :preload
    decoding="async"
    loading="lazy"
    :src="props.img"
    placeholder-class="skeleton size-full bg-blend-screen rounded-lg bg-b3 border-b3  inset-shadow-xs border !opacity-40"
    v-bind="props"
    :alt="props.alt"
    :class="
      cn(
        'size-full shrink-0 opacity-0 transition-[opacity,transform]',
        {
          'translate-z-0 opacity-100': loaded,
        },
        loaded ? props.class : '',
      )
    "
    @load="loaded = true"></NuxtImg>
</template>
