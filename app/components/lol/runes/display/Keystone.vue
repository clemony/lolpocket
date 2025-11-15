<script lang="ts" setup>
import { Primitive } from 'reka-ui'
import { runeToPath } from '~~/shared/indexes'

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
      cn(
        `
          relative grid aspect-square h-20 place-items-center overflow-hidden
          rounded-full transition-all duration-300
        `,
        {
          'drop-shadow-md': loaded,
        },
        loaded ? loadedClass : ' border border-b2 bg-b2/30 ',
        className,
      )
    ">
    <slot />
    <img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="`/img/runes/${runeToPath[id]}/${id}.webp`"
      :alt="ix().runeNameById(id)"
      :class="
        cn('size-full rounded-full bg-b3/80 transition-all duration-300', {
          'scale-105 ': loaded,
        })
      "
      @load="loaded = true" />
  </Primitive>
</template>
