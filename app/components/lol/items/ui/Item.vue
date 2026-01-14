<script setup lang="ts">
const {
  id,
  title,
  class: className,
  loadingType,
  map,
  size,
  tip,
  variant
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  size?: ButtonVariants['size']
  title?: string
  map?: number
  variant?: ButtonVariants['variant']
  dataSize?: TooltipSize
  tip?: string | null
}>()

const loaded = shallowRef<boolean>(false)
const tps = computed (() => {
  if (tip === null)
    return null
  const a = tip?.split(', ')
  return {
    placement: a?.filter(s => tooltipPlacements.includes(s))[0] || 'top',
    size: a?.filter(s => tooltipSizes.includes(s))[0] || 'lg',
  }
})
</script>

<template>
  <Img
    :size
    :variant
    :data-map="map"
    :data-id="id"
    :data-placement="tps?.placement"
    :data-size="tps?.size"
    :data-interactive="tps?.size === 'lg' ? true : false"
    :data-tip="!tps ? null : 'item'"
    :title=" !tps && title ? title : !tps ? itemNameById(id) : null"
    :class="
      cn({ 'opacity-96 shadow-sm shadow-black/30  p-0! drop-shadow-sm ': id && loaded },
         className,
      )
    "
    :src="`/img/items/${id}.webp`"
    :alt="itemNameById(id)"
    :loading-type
    @load="loaded = true" />
</template>
