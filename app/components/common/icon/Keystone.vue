<script lang="ts" setup>
import { RuneTooltip } from '#components'

const {
  id,
  side,
  class: className,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | null
  loadedClass?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)

const toast = useToast()
function showToast() {
  if (!id) return
  if (!toast.toasts.value.find(t => t.id === `rune-${id}`)) {
    toast.add({
      id: `rune-${id}`,
      description: h(RuneTooltip, { id }),
      duration: 0,
      ui: {
        root: 'p-0!'
      }
    })
  }
}
</script>

<template>
  <Tooltip
    trailing-icon="i"
    :side
    :text="id ? runeNameById(id) : ''"
    :img="id ? `/img/runes/${id}.webp` : undefined">
    <Img
      v-if="id"
      :key="id"
      role="button"
      :loading-type
      :src="`/img/runes/${id}.webp`"
      :alt="runeNameById(id)"
      :class="
        cn('aspect-square size-full shrink-0 object-contain', {
          'scale-105 drop-shadow-sm drop-shadow-black/40': loaded,
        }, className)
      "
      @click.stop="showToast()"
      @load="loaded = true">
      <slot />
    </Img>
  </Tooltip>
</template>
