<script setup lang="ts">
const {
  id,
  class: className,
  dataSize = 'lg',
  loadingStyle,
  noTip = false
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingStyle?: LoadingStyle
  dataSize?: TooltipSize
  noTip?: boolean
}>()
</script>

<template>
  <Element
    :data-id="noTip ? '' : id"
    :data-size="dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :data-tip="noTip ? null : 'item'"
    :class="
      cn('relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-md',
         { 'shadow-sm shadow-black/30  drop-shadow-sm ': id },

         className,
      )
    ">
    <Img
      v-if="id"
      :src="`/img/items/${id}.webp`"
      :alt="id.toString()"
      :loading-style
      class="aspect-square size-full opacity-96" />

    <slot />
  </Element>
</template>
