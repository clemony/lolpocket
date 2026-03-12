<script lang="ts" setup>
const {
  id,
  side,
  class: className,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes["class"]
  id: number | null
  loadedClass?: HTMLAttributes["class"]
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)
</script>

<template>
  <Tooltip
    trailing-icon="i-click"
    :side
    :label="id ? runeNameById(id) : ''"
    :avatar="id ? `/img/runes/${id}.webp` : undefined">
    <Img
      v-if="id"
      :key="id"
      role="button"
      :loading-type
      :src="`/img/runes/${id}.webp`"
      :alt="runeNameById(id)"
      :class="
        cn(
          'aspect-square size-full shrink-0 object-contain',
          {
            'scale-105 drop-shadow-sm drop-shadow-black/40': loaded,
          },
          className,
        )
      "
      @load="loaded = true">
      <slot />
    </Img>
  </Tooltip>
</template>
