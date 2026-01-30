<script lang="ts" setup>
import { Tooltip, TooltipXL } from '#components'

const {
  id,
  side = 'top',
  class: className,
  loadingType,
  size = 'sm',
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | undefined
  loadingType?: LoadingStyle
  size?: TooltipSize
  side?: Side
}>()

const loaded = ref(false)

watch(
  () => id,
  (newVal) => {
    if (newVal) loaded.value = false
  }
)

const component = computed (() => size === 'sm' ? Tooltip : TooltipXL)
</script>

<template>
  <component :is="component" :text="size === 'sm' ? spells[id].name : ''" :img="`/img/spells/${id}.webp`" :side>
    <Img
      v-if="id"
      :class="
        cn({ 'size-14 shadow-sm shadow-black/30 drop-shadow-sm': loaded }, className)
      "
      :loading-type
      :alt="spells[id].name"
      :src="`/img/spells/${id}.webp`"
      @load="loaded = true"
    />
  </component>
</template>
