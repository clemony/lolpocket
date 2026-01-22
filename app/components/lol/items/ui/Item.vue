<script setup lang="ts">
const {
  id,
  title,
  class: className,
  loadingType,
  map,
  placement = 'top',
  size,
  tip = true,
  tooltipSize = 'lg',
  variant
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  size?: ButtonVariants['size']
  title?: string
  map?: number
  variant?: ButtonVariants['variant']
  tooltipSize?: TooltipSize
  tip?: boolean
  placement?: string
}>()

const loaded = shallowRef<boolean>(false)

/*
      v-tooltip="tip === true ? {
        id,
        interactive: tooltipSize === 'lg',
        map,
        placement,
        size: tooltipSize,
        type: 'item',
      } : false" */
</script>

<template>
  <UTooltip
    size="lg"
    variant="neutral"
    arrow>
    <Img
      :size
      :variant
      :class="
        cn({ 'opacity-96 shadow-sm shadow-black/30  p-0! drop-shadow-sm ': id && loaded },
           className,
        )
      "
      :src="`/img/items/${id}.webp`"
      :alt="itemNameById(id)"
      :loading-type
      @load="loaded = true" />
    <template #content>
      <ItemTooltip
        :id
        :map />
    </template>
  </UTooltip>
</template>
