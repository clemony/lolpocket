<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  alt,
  img,
  class: className,
} = defineProps<{
  alt: string
  img: string | null
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <label :class="cn('size-full relative shrink-0 transform-3d', className)">
    <img
      :key="img"
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
      @load="loaded = true" />
    <slot />
  </label>
</template>
