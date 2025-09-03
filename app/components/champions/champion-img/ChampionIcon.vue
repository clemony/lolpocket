<script setup lang="ts">
const { id, alt, class: className, sizes, title } = defineProps<{
  id: number
  alt?: string
  class?: HTMLAttributes['class']
  sizes: string[]
  title?: string
}>()
console.log('🌱 - id:', `/img/champions/${id}.webp`)
</script>

<template>
  <StaticImg
    :sizes="sizes"
    :img="`/img/champions/${id}.webp`"
    :alt="title || alt || `Champion ${id} icon`"
    :class="cn('object-center overflow-hidden shadow-sm size-full  bg-b2/40 drop-shadow-sm grid place-items-center ', className)">
    <slot />
  </StaticImg>
</template>
