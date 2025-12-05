<script setup lang="ts">
const {
  id,
  class: className,
  spinner
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  spinner?: boolean
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
      :spinner
      class="aspect-square size-full rounded-lg opacity-96" />

    <slot />
  </Element>
</template>
