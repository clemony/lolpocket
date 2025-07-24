<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, class: className, as = 'div' } = defineProps<PrimitiveProps & {
  id: number | null
  class?: HTMLAttributes['class']
  as?: string
}>()
const emit = defineEmits(['loaded'])

const loaded = ref(false)
function handleLoad() {
  loaded.value = true
}
</script>

<template>
  <Primitive
    :as="as"
    :class="cn('rounded-lg relative bg-b3/60 overflow-hidden grid place-items-center aspect-square  ', { ' shadow-sm shadow-black/50  drop-shadow-sm': loaded == true && id != null && id != 0, ' shadow-warm-soft ': !loaded || id == null || id == 0 }, className)">
    <Img
      v-show="id != null"
      :img="`/img/item/${id}.webp`"
      alt=" "
      class="aspect-square opacity-96 size-full  absolute rounded-lg"
      @load="handleLoad()" />

    <Skeleton
      v-show="!loaded && id != null && id != 0"
      class="absolute opacity-99 size-full" />
    <slot />
  </Primitive>
</template>

<style scoped></style>
