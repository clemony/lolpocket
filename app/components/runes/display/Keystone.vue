<script lang="ts" setup>
import { runeToPath } from '#shared/appdata/index/'
import { Primitive } from 'reka-ui'

const {
  id,
  as = 'label',
  class: className,
  loadedClass
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
  }
)
</script>

<template>
  <Primitive
    :as
    :class="
      cn(
        'rounded-full overflow-hidden transition-all   duration-300 relative h-20  grid place-items-center aspect-square ',
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
        cn('transition-all duration-300 bg-b3/80 rounded-full size-full', {
          'scale-105 ': loaded,
        })
      "
      @load="loaded = true" />
  </Primitive>
</template>
