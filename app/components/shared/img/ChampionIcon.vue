<script setup lang="ts">
const {
  id,
  title,
  alt,
  class: className,
} = defineProps<{
  id: number
  alt?: string
  class?: HTMLAttributes['class']
  title?: string
}>()
</script>

<template>
  <StaticImg
    :img="`/img/champions/${id}.webp`"
    :alt="title || alt || `Champion ${id} icon`"
    :class="
      cn(
        'object-center overflow-hidden shadow-sm size-full  bg-b2/40 drop-shadow-sm grid place-items-center ',
        className,
      )
    ">
    <slot />
  </StaticImg>
</template>
