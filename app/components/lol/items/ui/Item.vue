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
        'rounded-lg shrink-0  relative bg-b2 overflow-hidden grid place-items-center aspect-square', { ' shadow-warm-soft shadow-sm shadow-black/30  drop-shadow-sm ': id },

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
