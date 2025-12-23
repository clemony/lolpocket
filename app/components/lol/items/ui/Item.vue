<script setup lang="ts">
const {
  id,
  class: className,
  loadingStyle
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingStyle?: LoadingStyle
}>()
</script>

<template>
  <Element
    :class="
      cn('relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-lg',
         { ' shadow-warm-soft shadow-sm shadow-black/30  drop-shadow-sm ': id },

         className,
      )
    ">
    <Img
      v-if="id"
      :src="`/img/items/${id}.webp`"
      :alt="id.toString()"
      :loading-style
      class="aspect-square size-full opacity-96" />

    <slot />
  </Element>
</template>
