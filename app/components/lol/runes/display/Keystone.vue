<script lang="ts" setup>
const {
  id,
  class: className,
  dataSize = 'lg',
  noTip = false,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | null
  loadedClass?: HTMLAttributes['class']
  dataSize?: TooltipSize
  noTip?: boolean
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
  <label
    :data-id="id"
    :data-tip="noTip ? null : 'rune' "
    :data-size="noTip ? null : dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :class="
      cn('hover-3d relative grid aspect-square size-full h-20 place-items-center', className,
      )
    ">
    <img
      v-if="id"
      :key="id"
      ref="imgEl"

      :src="`/img/runes/${id}.webp`"
      :alt="runeNameById(id)"
      :class="
        cn('size-full object-contain', {
          'scale-105 drop-shadow-sm drop-shadow-black/40': loaded,
        })
      "
      @load="loaded = true" />

    <slot />
  </label>
</template>
