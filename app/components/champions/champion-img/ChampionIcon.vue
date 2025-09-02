<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, alt, class: className, as = 'div' } = defineProps<PrimitiveProps & {
  id: number
  alt?: string
  class?: HTMLAttributes['class']
  as?: string
}>()

const loaded = ref(false)
</script>

<template>
  <Primitive
    :as="as"
    :class="cn('overflow-hidden shrink-0 bg-b2/40 size-16 grid place-items-center  relative  drop-shadow-sm', { 'shadow-sm': loaded }, className)">
    <Img
      :img="`/img/champions/${id}.png`"
      :alt="alt || `Champion ${id} icon`"
      :class="cn('scale-118 size-full absolute object-center opacity-0 transition-opacity duration-300', { 'opacity-100': loaded })"
      @load="loaded = true" />
    <Skeleton
      v-show="!loaded"
      class="absolute opacity-80" />
    <slot />
  </Primitive>
</template>
