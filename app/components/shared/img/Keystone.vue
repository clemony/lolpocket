<script lang="ts" setup>
import { runeToPath } from '#shared/appdata/index/'

const { class: className, id, loadedClass } = defineProps<{
  class?: HTMLAttributes['class']
  id: number | null
  loadedClass?: HTMLAttributes['class']
}>()
const loaded = ref(false)
const imgEl = ref<HTMLImageElement>()

watch(() => id, () => {
  loaded.value = false
  nextTick(() => {
    if (imgEl.value?.complete) {
      loaded.value = true
    }
  })
})
</script>

<template>
  <label
    :class="cn('rounded-full overflow-hidden transition-all   duration-300 relative h-20  grid place-items-center aspect-square ', {
      'drop-shadow-md': loaded,
    }, loaded ? loadedClass : ' border border-b2 bg-b2/30 ', className)">
    <slot />
    <img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="`/img/runes/${runeToPath[id]}/${id}.webp`"
      :alt="ix().runeNameById(id)"
      :class="cn('transition-all duration-300 bg-b3/80 rounded-full size-full', { 'scale-105 ': loaded })"
      @load="loaded = true" />
  </label>
</template>