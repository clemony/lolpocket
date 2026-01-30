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
  id?: number | null
  size?: TooltipSize
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)
const imgEl = useTemplateRef<HTMLImageElement>('imgEl')

const img = `/img/runes/${runeToPath[id]}/${id}.webp`
const component = computed (() => size === 'sm' ? Tooltip : TooltipXL)
</script>

<template>
  <component
    :is="component" :side :text="runeNameById(id)" :img="`/img/runes/${id}.webp`"
    :class="
      cn(
        'relative grid aspect-square size-17 h-full place-items-center overflow-hidden rounded-full border border-b2 bg-b2/30 p-0 transition-all duration-300',
        {
          'border border-black/60 shadow-sm inset-shadow-sides shadow-black/20 inset-shadow-black/60 drop-shadow-sm':
            loaded,
        },
        className,
      )
    "
  >
    <slot />
    <Img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="img"
      :loading-type
      :alt="runeNameById(id)"
      :class="
        cn('size-full rounded-full transition-all duration-300', {
          'scale-108': loaded,
        })
      "
      @load="loaded = true"
    />
  </component>
</template>
