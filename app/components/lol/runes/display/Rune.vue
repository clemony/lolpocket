<script lang="ts" setup>
import { runeToPath } from '~~/shared/.index';

const { id, class: className, dataSize = 'lg', noTip = false, } = defineProps<{
  class?: HTMLAttributes['class']
  id?: number | null
  dataSize?: TooltipSize
  noTip?: boolean
}>()
const loaded = ref(false)
const imgEl = useTemplateRef<HTMLImageElement>('imgEl')

const img = `/img/runes/${runeToPath[id]}/${id}.webp`
</script>

<template>
  <Label
    :data-type="noTip ? null : 'rune' "
    :data-size="noTip ? null : dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :data-id="id"
    variant="base"
    :class="
      cn('relative grid aspect-square size-17 h-full place-items-center overflow-hidden rounded-full border border-b2 bg-b2/30 p-0 transition-all duration-300',
         {
           'drop-shadow-sm shadow-sm inset-shadow-sides  shadow-black/20 border border-black/60 inset-shadow-black/60':
             loaded,
         },
         className,
      )
    ">
    <slot />
    <Img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="img"
      :alt="ix().runeNameById(id)"
      :class="
        cn('size-full rounded-full transition-all duration-300', {
          'scale-108 ': loaded,
        })
      "
      @load="loaded = true" />
  </Label>
</template>
