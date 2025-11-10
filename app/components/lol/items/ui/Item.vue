<script setup lang="ts">
const {
  id,
  as = 'div',
  class: className
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  as?: string
}
>()
</script>

<template>
  <Element
    :as
    :class="
      cn(
        `
          relative grid aspect-square shrink-0 place-items-center
          overflow-hidden rounded-lg bg-b2
        `, { ' shadow-warm-soft shadow-sm shadow-black/30  drop-shadow-sm ': id },

        className,
      )
    ">
    <Img
      v-if="id"

      :img="`/img/items/${id}.webp`"
      :alt="id.toString()"
      class="absolute aspect-square size-full self-center rounded-lg opacity-96" />

    <slot />
  </Element>
</template>
