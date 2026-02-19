<script setup lang="ts">
const {
  id,
  side = "top",
  class: className,
  loadingType,
  map,
  disabled,
} = defineProps<{
  id: number | null
  class?: HTMLAttributes["class"]
  loadingType?: LoadingStyle
  map?: number
  side?: Side
  disabled?: boolean
}>()

const loaded = shallowRef<boolean>(false)
/* const swap = shallowRef<boolean>(false)
function handleSwap() {} */
</script>

<template>
  <Tooltip
    :disabled="disabled"
    :text="id ? itemNameById(id) : ''"
    trailing-icon="i-right-click"
    :img="id ? `/img/items/${id}.webp` : undefined"
    :side>
    <!--    <UTooltip :disabled="disabled || !swap" :side> -->
    <Img
      :class="
        cn(
          'overflow-hidden rounded-lg',
          {
            'opacity-96 shadow-sm shadow-black/30 drop-shadow-sm': id && loaded,
          },
          className
        )
      "
      :src="id ? `/img/items/${id}.webp` : undefined"
      :alt="id ? itemNameById(id) : 'item icon'"
      :loading-type
      @load="loaded = true" />
    <!--
      @click.right="handleSwap()"   </UTooltip> -->
  </Tooltip>
</template>
