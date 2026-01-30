<script lang="ts" setup>
import { Tooltip, TooltipXL } from '#components'

const {
  id,
  side,
  class: className,
  loadingType,
  size = 'lg',
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | null
  loadedClass?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  size?: TooltipSize
  side?: Side
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

const component = computed (() => size === 'sm' ? Tooltip : TooltipXL)
</script>

<template>
  <component :is="component" :side :size :text="size === 'sm' ? runeNameById(id) : ''" :img="`/img/runes/${id}.webp`">
    <Img
      v-if="id"
      :key="id"
      ref="imgEl"
      :loading-type
      :src="`/img/runes/${id}.webp`"
      :alt="runeNameById(id)"
      :class="
        cn('size-full aspect-square shrink-0 object-contain', {
          'scale-105 drop-shadow-sm drop-shadow-black/40': loaded,
        }, className)
      "
      @load="loaded = true"
    >
      <slot />
    </Img>

    <template v-if="size === 'lg'" #content>
      <RuneTooltip :id />
    </template>
  </component>
</template>
