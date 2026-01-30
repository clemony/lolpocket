<script setup lang="ts">
import { Tooltip, TooltipXL } from '#components'

const {
  id,
  side = 'top',
  class: className,
  loadingType,
  map,
  size = 'lg',
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  map?: number
  size?: TooltipSize
  side?: Side
}>()

const loaded = shallowRef<boolean>(false)
const component = computed (() => size === 'sm' ? Tooltip : TooltipXL)
</script>

<template>
  <TooltipXL arrow :side>
    <Img
      :size
      :class="
        cn(
          {
            'p-0! opacity-96 shadow-sm shadow-black/30 drop-shadow-sm':
              id && loaded,
          },
          className,
        )
      "
      :src="`/img/items/${id}.webp`"
      :alt="itemNameById(id)"
      :loading-type
      @load="loaded = true"
    />
    <template #content>
      <ItemTooltip :id :map />
    </template>
  </TooltipXL>
</template>
