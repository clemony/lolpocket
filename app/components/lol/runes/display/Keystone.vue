<script lang="ts" setup>
import { Primitive } from 'reka-ui'

const {
  id,
  as = 'label',
  class: className,
  loadedClass,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | null
  loadedClass?: HTMLAttributes['class']
  as?: string
}>()
const loaded = ref(false)
const imgEl = useTemplateRef<HTMLImageElement>('imgEl')

watch(
  () => id,
  () => {
    loaded.value = false
    nextTick(() => {
      if (imgEl.value?.complete) {
        loaded.value = true
      }
    })
  },
)
</script>

<template>
  <Primitive
    :as
    :class="
      cn('relative grid aspect-square h-20 place-items-center overflow-visible rounded-full transition-all duration-300', className,
      )
    ">
    <slot />
    <img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="`/img/runes/${runeToPath[id]}/${id}.webp`"
      :alt="runeNameById(id)"
      :class="
        cn('size-full rounded-full bg-radial from-b3 to-transparent to-90% transition-all duration-300', {
          'scale-105 drop-shadow-md': loaded,
        })
      "
      @load="loaded = true" />
  </Primitive>
</template>
